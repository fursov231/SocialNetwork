import React from "react";
import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";

describe("after creation <span> with status should be displayed with correct status", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="WELCOME"/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test("input should be displayed in editMode", () => {
        const component = create(<ProfileStatus status="WELCOME"/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="WELCOME"/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe("WELCOME");
    });

        test("callback should be called", () => {
            const mockCallback = jest.fn();
            const component = create(<ProfileStatus status="WELCOME" updateStatus={mockCallback}/>);
            const instance = component.getInstance();
            instance.deactivateEditMode();
            expect(mockCallback.mock.calls.length).toBe(1);

        });


    });