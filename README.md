# Goom Schedule

![Image description](./assets/header.png)

## Description

This project caters to the unique needs of streamers for managing their live streaming schedules across myriad time zones. 
The scheduling application handily creates schedules in various time zones, allowing streamers to effortlessly organize and share their streaming timetable with their global viewer base. 
An essential feature of this application is its knack to generate Discord-formatted dates, enabling seamless integration with Discord channels for straightforward schedule sharing and communication. 
Built using TypeScript and leveraging the Day.js library for dealing with date and time manipulations, the application stands out for its compatibility with an extensive array of time zones. 
As a result, no matter where viewers are located worldwide, the live streaming experience remains smooth and hassle-free for everyone involved. 
Overall, this scheduling app provides a comprehensive solution for streamers aiming for global reach, adding convenience to time management so they can focus on delivering the best content possible.

## How to use
- Start by selecting a start date. By default, the date will be set to the current date, and the time zone to your system's time zone.
- Select the number of days for which you'd like to create a schedule.
- Choose the time zones for which you'd like to generate a schedule. This step is not necessary if you're creating a schedule solely for Discord. If you don't select a time zone, the system will use your default time zone.
- Click `Create Schedule` to generate a schedule template.
- Enter a starting hour and description. It's optional to fill in these fields; you can leave any of them empty.
- Click `Submit` to finalize and view your schedule.

Clicking the update schedule will update the dates, range and time zones but will reset the template and remove all the information.


##
## Project Setup

This project is based on Turbo Repo and Next.js. Follow the instructions below to get it up and running on your local machine for development and testing purposes

### Prerequisites

Before you begin, ensure you have the following installed on your local development machine:

- **Node.js** - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you need to update your version of npm, you can do it by running `npm install npm@latest -g`.

- **Yarn** - You might also want to use Yarn as the package manager. [Download & Install Yarn](https://classic.yarnpkg.com/en/docs/install/).

- **Git** - [Download & Install Git](https://git-scm.com/downloads). MacOS and Linux machines typically have this already installed.

### Installation

*Step-by-step guide on setting up the project*

1. Clone the repository
    ```bash
    git clone https://github.com/diggerhub/goomschedule.git
    ```
2. Navigate to the project folder
    ```bash
    cd repo
    ```
3. Install dependencies
    ```bash
    yarn install
    ```
4. Run the application
    ```bash
    yarn dev
    ```

## Usage

Open your web browser to http://localhost:3000/

## Contributing
Contributions to this project are greatly appreciated. Whether you're fixing a bug, proposing a new feature, or improving existing features, your assistance is extremely valuable.

Here's how you can contribute:
1. Clone this repository to your local machine.
2. Create a new branch for your changes (`git checkout -b name-of-your-branch`).
3. Make your changes in your designated branch.
4. Commit your changes with an informative message (`git commit -m 'describe the changes made'`).
5. Push your branch to the remote repository (`git push origin name-of-your-branch`).
6. From your branch in the remote repository, open a pull request.

When submitting a pull request, please provide a detailed description of the changes you made. 
It simplifies the review process and makes it easier for us to incorporate your contributions.

While direct contributions via pull requests are the easiest way to contribute, you're also welcome to fork the project for personal use. 
However, if you intend to use the project for publicly available products or services, please remember to provide appropriate attribution. 
Any contributions you make must be under the same license that governs the original project.

## License

This project is licensed under the terms of the Creative Commons Attribution-NonCommercial 4.0 International Public License ("CC-BY-NC-4.0").

Under CC-BY-NC-4.0, you are free to:

- **Share** — copy and redistribute the material in any medium or format.
- **Adapt** — remix, transform, and build upon the material.

Under the following terms:

- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

- **NonCommercial** — You may not use the material for commercial purposes.

For the complete details of the license, please refer to the [CC-BY-NC-4.0 License](https://creativecommons.org/licenses/by-nc/4.0/) page on the Creative Commons website.
