/**
 * Tom Bielawski
 * Lambda School WEB45 
 * Advanced React Sprint Challenge
 * 8/6/2021
 */

//Imports
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import React from "react";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () =>
{
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => 
{
    //Arrange
    render(<CheckoutForm />);

    //Get the inputs and test with data
    userEvent.type(screen.getByLabelText(/first name/i), "Samuel");
    userEvent.type(screen.getByLabelText(/first name/i), "Nicholas");
    userEvent.type(screen.getByLabelText(/address/i), "125-171 S Front St");
    userEvent.type(screen.getByLabelText(/city/i), "Philadelphia");
    userEvent.type(screen.getByLabelText(/state/i), "PA");
    userEvent.type(screen.getByLabelText(/zip/i), "19106");
    userEvent.click(screen.getByRole("button"));

    //Find the success message
    expect(screen.getByTestId("successMessage")).toBeInTheDocument();
});