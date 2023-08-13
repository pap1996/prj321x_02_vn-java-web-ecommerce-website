package com.ecommerce.prj321x.application.exception;


import lombok.Getter;

public class AddressException extends RuntimeException {
    @Getter
    private String errorCode;
    @Getter
    private String errorMessage;

    public AddressException(String errorCode, String errorMessage ) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }


}
