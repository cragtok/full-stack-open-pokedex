## Exercise 11.1

Language: Python.

Linting tools:
- Pylint
- Flake8
- PyRight

Testing tools:
- Behave
- PyTest
- PyUnit
- Testify
- DocTest

Build tools:
- PyBuilder
- PyInstaller
- SCons
- Hatchling
- Setuptools

Alternatives to Jenkins and GitHub Actions:
- TeamCity
- Travis CI
- Buildbot
- GitLab CI/CD
- Semaphore

Criteria to be used in deciding between a self-hosted and cloud-based environment:
- **The scope/size of the application**
    - Larger, more complex applications would require a self-hosted environment, since there would likely be many different components which have to be integrated (like in a microservices architecture). More control would be required in configuring the CI/CD process and managing resources.
    - On the other hand, a smaller and less complex application would be satisfied with a cloud-based service. This is because it would likely be simpler to work with, so the flexibility and control of a self-hosted setup would not be a priority.
- **Number of developers/roles** 
    - An application with many developers each focusing on a variety of roles would require complex rules to fix developer errors and facilitate developer coordination in the CI/CD process. Therefore, a self-hosted option is more suitable.
    - An application with a small number of developers would make do with a cloud-based solution, since there would likely not be too many complex developer interactions in the CI/CD process.
- **Type of application**
    - A generic application idea which has been done by other developers/companies in the past (such as a CRUD app) would likely have their requirements met using a cloud-based service.
    - On the other hand, a new and untested application idea would likely require more control and flexibility in the CI/CD process, so a self-hosted environment is more suitable.

Therefore, based on these criteria and the information given, a cloud-based environment would be better for this situation, since it has a small number of developers. Therefore, the application is not likely to be too complex or large in scope.
