## Supervisor Managament App
This is a bundled backend service with a React UI. This module coordinates the supervisors currently working at CompanyX and the jurisdiction they cover.
### User Story: 
Any employee in the company can submit their contact information for a specific supervisor to be notified of
any announcements the supervisor has made.

#### Backend service:
This microservice will be responsible for consolidating the list of current supervisors with following endpoints:
##### GET /api/supervisors
  The supervisors are mapped from a JSON file. And the endpoint returns int the following format:
  The format of the supervisors returned must be displayed in the following format:
      '(jurisdiction) - (lastName), (firstName)'. sorted in alphabetical order, first by jurisdiction, then my last
name, finally by first name. Numeric juristictions are removed from the response.
##### POST /api/submit
This endpoint should accept a request for a new notification request for a supervisor.
The following data is required in the payload
1. firstName
2. lastName
3. email
4. phoneNumber
5. Supervisor

## Usage
### Starting the app
 - After cloning the app cd to backend and run the command:
   ```
    $ ./mvnw clean install 
   ```
   - Once you have a successful build run the application
   ```
    $ ./mvnw spring-boot:run
   ```
 - Once your server is up and running, cd to frontend, and install required packages via:
    ```
    $ npm install
    ```
 - Then run your app
    ```
    $ npm start
    ```


