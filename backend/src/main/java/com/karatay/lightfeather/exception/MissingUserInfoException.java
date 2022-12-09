package com.karatay.lightfeather.exception;

public class MissingUserInfoException extends RuntimeException {
    public MissingUserInfoException() {
        super();
    }

    public MissingUserInfoException(String message) {
        super(message);
    }
}
