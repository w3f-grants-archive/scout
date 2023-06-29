# Scout: Security Analysis Tool

![https://img.shields.io/badge/license-MIT-green](https://img.shields.io/badge/license-MIT-green)

<p align="center">
  <img src="/assets/scout.png" alt="Scout in a Dark Forest" width="300" center  />
</p>


Scout is an extensible open-source tool intended to assist ink! smart contract developers and auditors detect common security issues and deviations from best practices. 

This tool will help developers write secure and more robust smart contracts.

Our interest in this project comes from our experience in manual auditing and our usage of comparable tools in other blockchains.
To improve coverage and precision, we´ll persist in research efforts on static and dynamic analysis techniques. Find more about our ongoing research at our associated repository.

## Quick Start

For a quick start, make sure that [Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html) is installed on your computer. Then, install Scout dependencies by running the following command:

```bash
cargo install cargo-dylint dylint-link
```

Afterwards, install Scout with the following command:

```bash
cargo install --path <PATH_TO_CARGO_SCOUT_FOLDER>
```

To run Scout on your project, navigate to its root directory and execute the following command:

```bash
cargo scout
```

For more information on installation and usage, please refer to the [Getting Started](https://coinfabrik.github.io/scout/docs/intro) section in our documentation below.

## Documentation

* [Getting Started](https://coinfabrik.github.io/scout/docs/intro)
* [Vulnerabilities](https://coinfabrik.github.io/scout/docs/vulnerabilities)
* [Detectors](https://coinfabrik.github.io/scout/docs/detectors)
* [Contribute](https://coinfabrik.github.io/scout/docs/contribute)
* [Blog](https://blog.coinfabrik.com/)


Visit [Scout's website](https://coinfabrik.github.io/scout/) to view the full documentation.


## Detectors


| Detector ID                                                                                                                                    | What it Detects                                                                                                                                                                                                                                     | Test Cases                                                                                                                                         | Severity      |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| [integer-overflow-or-underflow](https://coinfabrik.github.io/scout/docs/detectors/integer-overflow-or-underflow)         | [An arithmetic operation overflows or underflows the available memory allocated to the variable.](https://coinfabrik.github.io/scout/docs/vulnerabilities/integer-overflow-or-underflow)                                                                                     | [1](https://github.com/CoinFabrik/scout/tree/main/test-cases/integer-overflow-or-underflow/integer-overflow-or-underflow-1), [2](https://github.com/CoinFabrik/scout/tree/main/test-cases/integer-overflow-or-underflow/integer-overflow-or-underflow-2) | Critical      |
| [set-contract-storage](https://coinfabrik.github.io/scout/docs/detectors/set-contract-storage)                           | [Insufficient access control on set_contract_storage() function.](https://coinfabrik.github.io/scout/docs/vulnerabilities/set-contract-storage)                                                                                                                                 | [1](https://github.com/CoinFabrik/scout/tree/main/test-cases/set-contract-storage/set-contract-storage-1)                                                                                                                   | Critical      |
| [reentrancy](https://coinfabrik.github.io/scout/docs/detectors/reentrancy)                                             | [Consistency of contract state under recursive calls.](https://coinfabrik.github.io/scout/docs/vulnerabilities/reentrancy)                                                                                                                                                              | [1](https://github.com/CoinFabrik/scout/tree/main/test-cases/reentrancy/reentrancy-1), [2](https://github.com/CoinFabrik/scout/tree/main/test-cases/reentrancy/reentrancy-2)                                              | Critical      |
| [panic-error](https://coinfabrik.github.io/scout/docs/detectors/panic-error.md)                                           | [Code panics on error instead of using descriptive enum.](https://coinfabrik.github.io/scout/docs/vulnerabilities/panic-error.md)                                                                                                                                                         | [1](https://github.com/CoinFabrik/scout/tree/main/test-cases/panic-error/panic-error-1)                                                                                                                                   | Enhancement   |
| [unused-return-enum](https://coinfabrik.github.io/scout/docs/detectors/unused-return-enum.md)                             | [Return enum from a function is not completely used.](https://coinfabrik.github.io/scout/docs/vulnerabilities/unused-return-enum.md)                                                                                                                                                   | [1](https://github.com/CoinFabrik/scout/tree/main/test-cases/unused-return-enum/unused-return-enum-1)                                                                                                                       | Minor         |
| [dos-unbounded-operation](https://coinfabrik.github.io/scout/docs/detectors/dos-unbounded-operation.md)                     | [DoS due to unbounded operation.](https://github.com/CoinFabrik/scout/blob/main/docs/docs/vulnerabilities/6-dos-unbounded-operation.md)                                                                                                                                                                 | [1](https://github.com/CoinFabrik/scout/tree/main/test-cases/dos-unbounded-operation/dos-unbounded-operation-1)                                                                                                           | Medium        |
| [dos-unexpected-revert-with-vector](https://coinfabrik.github.io/scout/docs/detectors/dos-unexpected-revert-with-vector.md)   | [DoS due to improper storage.](https://coinfabrik.github.io/scout/docs/vulnerabilities/dos-unexpected-revert-with-vector.md)                                                                                                                                                           | [1](https://github.com/CoinFabrik/scout/tree/main/test-cases/dos-unexpected-revert-with-vector/dos-unexpected-revert-with-vector-1)                                                                                       | Medium        |
| [unsafe-expect](https://coinfabrik.github.io/scout/docs/detectors/unsafe-expect.md)                                         | [Improper usage of the expect method, leading to unexpected program crashes.](https://coinfabrik.github.io/scout/docs/vulnerabilities/unsafe-expect.md)                                                                                                                                | [1](https://github.com/CoinFabrik/scout/tree/main/test-cases/unsafe-expect/unsafe-expect-1)                                                                                                                               | Medium        |
| [unsafe-unwrap](https://coinfabrik.github.io/scout/docs/detectors/unsafe-unwrap.md)                                         | [Inappropriate usage of the unwrap method, causing unexpected program crashes.](https://coinfabrik.github.io/scout/docs/vulnerabilities/unsafe-unwrap.md)                                                                                                                                 | [1](https://github.com/CoinFabrik/scout/tree/main/test-cases/unsafe-unwrap/unsafe-unwrap-1)                                                                                                                               | Medium        |
| [divide-before-multiply](https://coinfabrik.github.io/scout/docs/detectors/divide-before-multiply.md)                      | [Performing a division operation before a multiplication, leading to loss of precision.](https://coinfabrik.github.io/scout/docs/vulnerabilities/divide-before-multiply.md)                                                                                                        | [1](https://github.com/CoinFabrik/scout/tree/main/test-cases/divide-before-multiply/divide-before-multiply-1)                                                                                                             | Medium        |


## Tests

To validate our tool, we provide a set of code examples located in the [test-cases](https://github.com/CoinFabrik/scout/tree/main/test-cases) folder.

In order to run the integration tests, navigate to `apps/cargo-scout` and run:

```console
cargo test --all --all-features
```

In order to run the tests for a particular test case, run the same command on that particular test-case folder (e.g: `test-cases/delegate-call/delegate-call-1/vulnerable-example`)


## About CoinFabrik

We - [CoinFabrik](https://www.coinfabrik.com/) - are a research and development company specialized in Web3, with a strong background in cybersecurity. Founded in 2014, we have worked on over 180 blockchain-related projects, EVM based and also for Solana, Algorand, and Polkadot. Beyond development, we offer security audits through a dedicated in-house team of senior cybersecurity professionals, currently working on code in Substrate, Solidity, Clarity, Rust, and TEAL.

Our team has an academic background in computer science and mathematics, with work experience focused on cybersecurity and software development, including academic publications, patents turned into products, and conference presentations. Furthermore, we have an ongoing collaboration on knowledge transfer and open-source projects with the University of Buenos Aires.

## License

Scout is licensed and distributed under a MIT license. [Contact us](https://www.coinfabrik.com/) if you're looking for an exception to the terms.