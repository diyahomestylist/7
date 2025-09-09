import requests
import sys
from datetime import datetime
import json

class JusMomoAPITester:
    def __init__(self, base_url="https://web-revival-4.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"Response: {json.dumps(response_data, indent=2)}")
                except:
                    print(f"Response text: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text[:200]}...")

            return success, response.json() if success and response.text else {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout")
            return False, {}
        except requests.exceptions.ConnectionError:
            print(f"❌ Failed - Connection error")
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        success, response = self.run_test(
            "Root API Endpoint",
            "GET",
            "api/",
            200
        )
        return success

    def test_create_status_check(self):
        """Test creating a status check"""
        test_data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        success, response = self.run_test(
            "Create Status Check",
            "POST",
            "api/status",
            200,
            data=test_data
        )
        return response.get('id') if success else None

    def test_get_status_checks(self):
        """Test getting all status checks"""
        success, response = self.run_test(
            "Get Status Checks",
            "GET",
            "api/status",
            200
        )
        return success

def main():
    print("🚀 Starting Jus Momo API Testing...")
    print("=" * 50)
    
    # Setup
    tester = JusMomoAPITester()

    # Test basic API connectivity
    if not tester.test_root_endpoint():
        print("❌ Root API endpoint failed, backend may not be running properly")
        print("📊 Final Results:")
        print(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
        return 1

    # Test status check creation
    status_id = tester.test_create_status_check()
    if not status_id:
        print("❌ Status check creation failed")
    else:
        print(f"✅ Created status check with ID: {status_id}")

    # Test getting status checks
    if not tester.test_get_status_checks():
        print("❌ Getting status checks failed")

    # Print final results
    print("\n" + "=" * 50)
    print("📊 Final Results:")
    print(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All API tests passed!")
        return 0
    else:
        print("⚠️ Some API tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())