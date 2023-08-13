package com.ecommerce.prj321x.application.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.StringJoiner;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(AddressException.class)
    public ResponseEntity handleAddressException(AddressException e) {
        return ResponseEntity.ok(new StringJoiner(" - ", e.getErrorCode(),e.getErrorMessage()).toString());
    }
}
