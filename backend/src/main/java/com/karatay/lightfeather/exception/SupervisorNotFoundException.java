package com.karatay.lightfeather.exception;

public class SupervisorNotFoundException extends RuntimeException{

        public SupervisorNotFoundException() {
            super();
        }

        public SupervisorNotFoundException(String message) {
            super(message);
        }
}
