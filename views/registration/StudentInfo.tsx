import { NarwhalRoute } from "../routes";
import { MarkdownView } from "../../components/MarkdownView";
import * as React from "react";

const COPY = `# Student Voters

Students get to choose where they register to vote. College students may register at their campus address or register (or remain registered) at their permanent or home address. Some students may find it is easier to register locally than vote absentee through their home/permanent address.

**Important**: You may only be registered and vote in one location.

[Source: campusvoteproject.org](https://www.campusvoteproject.org/stateguides/Michigan)`;

export const StudentInfoView: NarwhalRoute = () => {
  return <MarkdownView markdown={COPY} />;
};

StudentInfoView.navigationOptions = {
  title: "Student Information",
};
