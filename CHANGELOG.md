# [1.40.0](https://github.com/wmfs/smithereens/compare/v1.39.0...v1.40.0) (2020-05-31)


### 🛠 Builds

* **deps:** bump make-dir from 3.0.2 to 3.1.0 ([ec26258](https://github.com/wmfs/smithereens/commit/ec262585fab064890a7a9dccf04df53acedbc586))

# [1.39.0](https://github.com/wmfs/smithereens/compare/v1.38.0...v1.39.0) (2020-05-31)


### 🛠 Builds

* **deps:** bump csv-string from 3.2.0 to 4.0.1 ([5c0599f](https://github.com/wmfs/smithereens/commit/5c0599fc75386f7062b0b71f838608631fbb48b3))
* **deps-dev:** bump codecov from 3.6.5 to 3.7.0 ([3b6aa38](https://github.com/wmfs/smithereens/commit/3b6aa382f640124278b0d306070f718ff6b51146))
* **deps-dev:** bump cz-conventional-changelog from 3.1.0 to 3.2.0 ([ff5f6be](https://github.com/wmfs/smithereens/commit/ff5f6bef52ca76a60f23e764184c6c2fa9fbfd8b))
* **deps-dev:** bump mocha from 7.1.2 to 7.2.0 ([85f43a4](https://github.com/wmfs/smithereens/commit/85f43a43828fa83760a8bec8da20779c54317f10))
* **deps-dev:** bump semantic-release from 17.0.7 to 17.0.8 ([a8fb828](https://github.com/wmfs/smithereens/commit/a8fb82877b8f8425edaf3f2dede4dc3b081a0121))
* **deps-dev:** bump standard from 14.3.3 to 14.3.4 ([7beaa17](https://github.com/wmfs/smithereens/commit/7beaa179e3e510d9c065f3248ea9d94c20f9621a))

# [1.38.0](https://github.com/wmfs/smithereens/compare/v1.37.0...v1.38.0) (2020-04-27)


### ✨ Features

* **interface:** Switch smithereens to return a promise instead of taking a callback ([5ee3a05](https://github.com/wmfs/smithereens/commit/5ee3a058c8397c11e1f8e421f43591c3eaec2e3a))


### 🐛 Bug Fixes

* **File-builder:** Get rid of callbacks in writeStreamInfo ([732c874](https://github.com/wmfs/smithereens/commit/732c8743ca652332b10d75c94a151a2bc98fe6f4))
* Eliminated async package. Flipped functions from callbacks to promises ([ee28edc](https://github.com/wmfs/smithereens/commit/ee28edcd829be7c2b4250a168dcc23b88d235a28))
* Eliminated callback at the top-level. ([68d03d9](https://github.com/wmfs/smithereens/commit/68d03d97b20bb69824bf7c4b6c0f17db3e181805))


### 🛠 Builds

* **deps:** Don't need lodash any more ([771509f](https://github.com/wmfs/smithereens/commit/771509fda00beaf86caee45a3cb66fc5ce648143))
* **deps-dev:** bump mocha from 7.1.1 to 7.1.2 ([c0cb956](https://github.com/wmfs/smithereens/commit/c0cb956b6c1379b5a5c111044a749c59f0528041))


### 📦 Code Refactoring

* **FileWriter:** Flipped _write implementation to async/await ([bbd24d4](https://github.com/wmfs/smithereens/commit/bbd24d4073cb1d7bc87f9e66e571792bd729337a))
* Pull write-to-stream out into its own file ([12f1172](https://github.com/wmfs/smithereens/commit/12f117271bcfefdec044848932598ec764cedfdf))
* **File-builder:** Don't need lodash in manifest() ([d6d0f6b](https://github.com/wmfs/smithereens/commit/d6d0f6bca91b87c31d2e6d6d85b7621a38427176))
* **File-builder:** Early returns in columnIndexDirSplit ([4060948](https://github.com/wmfs/smithereens/commit/406094879f7cfe94302ba054fb748fedf0778e1d))
* **File-builder:** More to the point function names ([51de697](https://github.com/wmfs/smithereens/commit/51de697ee51f09dfbd189ad1bfcb61c46ac5f94e))
* **File-builder:** Neatened dirSplit handling. ([16257e0](https://github.com/wmfs/smithereens/commit/16257e06a8a93571c54a69e9a16f7b750aa23de8))
* **File-builder:** Pulled createWriteStream out of writeStreamInfo ([c10c9ae](https://github.com/wmfs/smithereens/commit/c10c9ae42736d525979c3a66936691b8389f0366))
* **File-builder:** Pulled findMatchingKey out of columnIndexFileConfigFunction ([231b2f3](https://github.com/wmfs/smithereens/commit/231b2f3fa80f666da57665ab10a10789035d4e64))
* **File-builder:** Reworked close ([4ae8d0b](https://github.com/wmfs/smithereens/commit/4ae8d0b6f15f832d7e13a5810048c55c1dc42db1))
* **Transformer:** Stripped down transformer to simplify ([3c82bde](https://github.com/wmfs/smithereens/commit/3c82bdeb80892b1b7c2d222bff33d47d01b715fc))


### 🚨 Tests

* Add uuid output column to extend coverage :) ([7aa088f](https://github.com/wmfs/smithereens/commit/7aa088f9c300ea355d64a6eaa48d1dba7e9bbf7e))

# [1.37.0](https://github.com/wmfs/smithereens/compare/v1.36.0...v1.37.0) (2020-04-22)


### 🛠 Builds

* **deps:** Removed unused boom and dottie dependencies ([b39ac7b](https://github.com/wmfs/smithereens/commit/b39ac7b90d6f516f601d7c5d83615179eba60754))
* **deps-dev:** bump nyc from 15.0.0 to 15.0.1 ([6a0301d](https://github.com/wmfs/smithereens/commit/6a0301d67ad2dc0a55e72959aa5fbeb6472e50b1))
* **deps-dev:** bump semantic-release from 17.0.4 to 17.0.5 ([9a18f16](https://github.com/wmfs/smithereens/commit/9a18f16fce498efa6d6017ee0aed595fb579caff))
* **deps-dev:** bump semantic-release from 17.0.5 to 17.0.6 ([33678ec](https://github.com/wmfs/smithereens/commit/33678eccdf62b02fb9fa9c882482ec0d7b039ba9))
* **deps-dev:** bump semantic-release from 17.0.6 to 17.0.7 ([bb9c8e3](https://github.com/wmfs/smithereens/commit/bb9c8e327090b15fff0ad15ea7010846f5432a89))

# [1.36.0](https://github.com/wmfs/smithereens/compare/v1.35.0...v1.36.0) (2020-04-02)


### 🛠 Builds

* **deps:** bump uuid from 7.0.1 to 7.0.3 ([58d5b70](https://github.com/wmfs/smithereens/commit/58d5b70b19093bf5edb624c76ec77fbcbe8f3e1c))
* **deps-dev:** bump [@semantic-release](https://github.com/semantic-release)/changelog from 5.0.0 to 5.0.1 ([7b52fa5](https://github.com/wmfs/smithereens/commit/7b52fa576cb73d28991b774faeabfd3d4e1fa6b3))


### ⚙️ Continuous Integrations

* **circle:** add context env var config to config.yml ([b33918b](https://github.com/wmfs/smithereens/commit/b33918bdf76f53fa051ca37411fd15efef901191))

# [1.35.0](https://github.com/wmfs/smithereens/compare/v1.34.0...v1.35.0) (2020-03-24)


### 🛠 Builds

* **deps:** bump csv-string from 3.1.8 to 3.2.0 ([e21354b](https://github.com/wmfs/smithereens/commit/e21354b75f7f82c3ae6ea7f7282f50e43a10b919))
* **deps-dev:** bump mocha from 7.1.0 to 7.1.1 ([19038a9](https://github.com/wmfs/smithereens/commit/19038a9c55e43b48cd8a8d16296157853ca3b060))

# [1.34.0](https://github.com/wmfs/smithereens/compare/v1.33.1...v1.34.0) (2020-03-18)


### 🛠 Builds

* **deps:** bump jsonfile from 6.0.0 to 6.0.1 ([a360955](https://github.com/wmfs/smithereens/commit/a36095525fe8fd769f08ff27b7a1638482c2442f))
* **deps-dev:** bump standard from 14.3.1 to 14.3.2 ([6e4a759](https://github.com/wmfs/smithereens/commit/6e4a759509a39d3064e262addf9967ab9b9240af))
* **deps-dev:** bump standard from 14.3.2 to 14.3.3 ([bd86701](https://github.com/wmfs/smithereens/commit/bd867018f5b7326d21327bed1407df47e17c03bf))

## [1.33.1](https://github.com/wmfs/smithereens/compare/v1.33.0...v1.33.1) (2020-03-09)


### 🐛 Bug Fixes

* Corrected uuid require for version 7.* ([07c1d08](https://github.com/wmfs/smithereens/commit/07c1d0854bb6196acf6c321881ecc6e27748136a))


### 🛠 Builds

* **deps-dev:** bump conventional-changelog-metahub from 4.0.0 to 4.0.1 ([50e6889](https://github.com/wmfs/smithereens/commit/50e6889edd0f81148eb33e5bf1c3d858420eb2ab))
* **deps-dev:** bump mocha from 7.0.1 to 7.1.0 ([0b0b054](https://github.com/wmfs/smithereens/commit/0b0b054a918f94cfdb5c8e59f2e0884232ee6587))

# [1.33.0](https://github.com/wmfs/smithereens/compare/v1.32.0...v1.33.0) (2020-02-26)


### 🛠 Builds

* **deps:** bump uuid from 3.4.0 to 7.0.1 ([259d55c](https://github.com/wmfs/smithereens/commit/259d55c26a279e12db50ac1c014330a32a7b114c))

# [1.32.0](https://github.com/wmfs/smithereens/compare/v1.31.0...v1.32.0) (2020-02-26)


### 🛠 Builds

* **deps:** bump async from 3.1.1 to 3.2.0 ([4b981a0](https://github.com/wmfs/smithereens/commit/4b981a0255bdd9ab5a4b86a21335167a339a3612))

# [1.31.0](https://github.com/wmfs/smithereens/compare/v1.30.0...v1.31.0) (2020-02-26)


### 🛠 Builds

* **deps:** bump jsonfile from 5.0.0 to 6.0.0 ([17c98eb](https://github.com/wmfs/smithereens/commit/17c98eb0b91309ec62caf747a6eba23f2750321b))

# [1.30.0](https://github.com/wmfs/smithereens/compare/v1.29.0...v1.30.0) (2020-02-26)


### 🛠 Builds

* **deps:** bump csv-string from 3.1.7 to 3.1.8 ([3ba2b0f](https://github.com/wmfs/smithereens/commit/3ba2b0fa7cec48719f3855f42e471d78099590ca))
* **deps-dev:** bump semantic-release from 17.0.3 to 17.0.4 ([8b9c232](https://github.com/wmfs/smithereens/commit/8b9c232702186958ab8860b63bbd920198dcb7f3))

# [1.29.0](https://github.com/wmfs/smithereens/compare/v1.28.0...v1.29.0) (2020-02-13)


### 🛠 Builds

* **deps:** bump make-dir from 3.0.0 to 3.0.2 ([89c9e59](https://github.com/wmfs/smithereens/commit/89c9e59f53a822cc72c33717c5470ef4d293b8ae))
* **deps-dev:** bump [@semantic-release](https://github.com/semantic-release)/changelog from 3.0.6 to 5.0.0 ([e2e0520](https://github.com/wmfs/smithereens/commit/e2e0520da0b29ebc320b6235cc573610db55552d))
* **deps-dev:** bump [@semantic-release](https://github.com/semantic-release)/git from 7.0.18 to 9.0.0 ([9580a2e](https://github.com/wmfs/smithereens/commit/9580a2eef73818731525cb789e518a3a6daf92b0))
* **deps-dev:** bump codecov from 3.6.2 to 3.6.3 ([bda18c8](https://github.com/wmfs/smithereens/commit/bda18c81a6091cc00457a3bc45715eb21a7005b5))
* **deps-dev:** bump codecov from 3.6.3 to 3.6.4 ([9bcb18f](https://github.com/wmfs/smithereens/commit/9bcb18f5f5eb1dcce82615d882a33ea19e53d99c))
* **deps-dev:** bump codecov from 3.6.4 to 3.6.5 ([66551a0](https://github.com/wmfs/smithereens/commit/66551a06c7e6f08998b4e604e7ed2dc75c9f3676))
* **deps-dev:** bump cz-conventional-changelog from 3.0.2 to 3.1.0 ([d7f5076](https://github.com/wmfs/smithereens/commit/d7f50762932b8a3dee90d1b58120bd3b1711ecb7))
* **deps-dev:** bump semantic-release from 15.14.0 to 17.0.3 ([81ed57c](https://github.com/wmfs/smithereens/commit/81ed57c02c98a8b5fbe1fed9eb7e4e5b41bec484))

# [1.28.0](https://github.com/wmfs/smithereens/compare/v1.27.0...v1.28.0) (2020-01-27)


### 🛠 Builds

* **deps:** bump async from 3.1.0 to 3.1.1 ([b9a5f3b](https://github.com/wmfs/smithereens/commit/b9a5f3b75995170aec34b06f81fd1143aed3c3ff))
* **deps-dev:** bump codecov from 3.6.1 to 3.6.2 ([bd6b510](https://github.com/wmfs/smithereens/commit/bd6b510001c1e4ac707a514812db7bd031b7a890))
* **deps-dev:** bump mocha from 7.0.0 to 7.0.1 ([ef61eb1](https://github.com/wmfs/smithereens/commit/ef61eb1e26a161e839c23b8b05292a2a2363f4fd))
* **deps-dev:** update standard requirement from 12.0.1 to 14.3.1 ([f90366b](https://github.com/wmfs/smithereens/commit/f90366ba406d822e2804f58305b6e72d93361ad6))


### 💎 Styles

* Do not access Object.prototype method 'hasOwnProperty' from target object ([1fde225](https://github.com/wmfs/smithereens/commit/1fde225850d4173fa36c4a5fe5cd6093debc4063))
* standard --fix ([5c4aeba](https://github.com/wmfs/smithereens/commit/5c4aeba8e85743938f33fe5c92410c70e21f8050))

# [1.27.0](https://github.com/wmfs/smithereens/compare/v1.26.0...v1.27.0) (2020-01-22)


### 🛠 Builds

* **deps:** bump uuid from 3.3.3 to 3.4.0 ([5e07d2b](https://github.com/wmfs/smithereens/commit/5e07d2bc462d7176a0736df632f5dfb17b381c37))
* **deps-dev:** bump conventional-changelog-metahub from 3.0.0 to 4.0.0 ([2f00762](https://github.com/wmfs/smithereens/commit/2f00762ccc4036cfe506cd096c84046bc3a62bee))

# [1.26.0](https://github.com/wmfs/smithereens/compare/v1.25.0...v1.26.0) (2020-01-07)


### 🛠 Builds

* **deps:** bump csv-string from 3.1.6 to 3.1.7 ([c866522](https://github.com/wmfs/smithereens/commit/c866522d955a106e919785188d0e9f00c0aeec3c))

# [1.25.0](https://github.com/wmfs/smithereens/compare/v1.24.0...v1.25.0) (2020-01-07)


### 🛠 Builds

* **deps:** bump dottie from 2.0.1 to 2.0.2 ([5d4389c](https://github.com/wmfs/smithereens/commit/5d4389cb0aecfe16d3e21a4b9286a9740a9dd2af))

# [1.24.0](https://github.com/wmfs/smithereens/compare/v1.23.0...v1.24.0) (2020-01-07)


### 🛠 Builds

* **deps:** bump glob from 7.1.4 to 7.1.6 ([22533bf](https://github.com/wmfs/smithereens/commit/22533bf5b59ae159f63bf479ec5d96b5ef38a292))
* **deps-dev:** bump mocha from 6.2.2 to 7.0.0 ([8a300ad](https://github.com/wmfs/smithereens/commit/8a300adc0f5ae35210a9d36b052f736d412f6d25))
* **deps-dev:** bump packages ([04c45bc](https://github.com/wmfs/smithereens/commit/04c45bc33296bfb93a586c094752c224ee8fd74e))

# [1.23.0](https://github.com/wmfs/smithereens/compare/v1.22.0...v1.23.0) (2019-10-03)


### 🛠 Builds

* **deps:** update several dependencies ([4487a58](https://github.com/wmfs/smithereens/commit/4487a58))
* **deps-dev:** update dev dependancies ([ce20d2f](https://github.com/wmfs/smithereens/commit/ce20d2f))
* **dev-deps:** revert standard ([3093565](https://github.com/wmfs/smithereens/commit/3093565))

# [1.22.0](https://github.com/wmfs/smithereens/compare/v1.21.0...v1.22.0) (2019-09-09)


### 🛠 Builds

* **deps:** update lodash requirement from 4.17.14 to 4.17.15 ([09f875a](https://github.com/wmfs/smithereens/commit/09f875a))

# [1.21.0](https://github.com/wmfs/smithereens/compare/v1.20.0...v1.21.0) (2019-07-11)


### 🛠 Builds

* **deps:** update lodash requirement from 4.17.11 to 4.17.14 ([a78a47a](https://github.com/wmfs/smithereens/commit/a78a47a))
* **deps-dev:** update nyc requirement from 13.2.0 to 14.1.1 ([94c6939](https://github.com/wmfs/smithereens/commit/94c6939))


### 📚 Documentation

* Add CircleCI badge ([4829a52](https://github.com/wmfs/smithereens/commit/4829a52))


### ⚙️ Continuous Integrations

* **circle:** Add CircleCI config ([e66a3c3](https://github.com/wmfs/smithereens/commit/e66a3c3))
* **travis:** Remove Travis config ([1b38191](https://github.com/wmfs/smithereens/commit/1b38191))

# [1.20.0](https://github.com/wmfs/smithereens/compare/v1.19.0...v1.20.0) (2019-07-02)


### 🛠 Builds

* **deps:** update glob requirement from 7.1.3 to 7.1.4 ([f2745a7](https://github.com/wmfs/smithereens/commit/f2745a7))
* **deps-dev:** update mocha requirement from 5.2.0 to 6.1.4 ([e8de701](https://github.com/wmfs/smithereens/commit/e8de701))

# [1.19.0](https://github.com/wmfs/smithereens/compare/v1.18.0...v1.19.0) (2019-07-02)


### 🛠 Builds

* **deps:** update make-dir requirement from 2.0.0 to 3.0.0 ([54b5f3f](https://github.com/wmfs/smithereens/commit/54b5f3f))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement ([534bd85](https://github.com/wmfs/smithereens/commit/534bd85))
* **deps-dev:** update semantic-release requirement ([832cb9c](https://github.com/wmfs/smithereens/commit/832cb9c))

# [1.18.0](https://github.com/wmfs/smithereens/compare/v1.17.0...v1.18.0) (2019-06-27)


### 🛠 Builds

* **deps:** update upath requirement from 1.1.0 to 1.1.2 ([0532e55](https://github.com/wmfs/smithereens/commit/0532e55))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement ([ac6dff4](https://github.com/wmfs/smithereens/commit/ac6dff4))
* **deps-dev:** update semantic-release requirement ([52d1e0b](https://github.com/wmfs/smithereens/commit/52d1e0b))

# [1.17.0](https://github.com/wmfs/smithereens/compare/v1.16.0...v1.17.0) (2019-02-08)


### 🛠 Builds

* **deps:** update debug requirement from 4.1.0 to 4.1.1 ([29a60c0](https://github.com/wmfs/smithereens/commit/29a60c0))
* **deps:** update make-dir requirement from 1.3.0 to 2.0.0 ([ebf7cbc](https://github.com/wmfs/smithereens/commit/ebf7cbc))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/changelog requirement ([4fae445](https://github.com/wmfs/smithereens/commit/4fae445))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement ([c57de86](https://github.com/wmfs/smithereens/commit/c57de86))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement ([edb1bc8](https://github.com/wmfs/smithereens/commit/edb1bc8))
* **deps-dev:** update nyc requirement from 13.1.0 to 13.2.0 ([87e098a](https://github.com/wmfs/smithereens/commit/87e098a))
* **deps-dev:** update semantic-release requirement ([95276e4](https://github.com/wmfs/smithereens/commit/95276e4))
* **deps-dev:** update semantic-release requirement ([877e3a4](https://github.com/wmfs/smithereens/commit/877e3a4))

# [1.16.0](https://github.com/wmfs/smithereens/compare/v1.15.0...v1.16.0) (2018-11-28)


### 🛠 Builds

* **deps:** update boom requirement from 7.2.2 to 7.3.0 ([0ad3592](https://github.com/wmfs/smithereens/commit/0ad3592))
* **deps-dev:** update semantic-release requirement ([d480f7b](https://github.com/wmfs/smithereens/commit/d480f7b))
* **deps-dev:** update semantic-release requirement ([dd17bd1](https://github.com/wmfs/smithereens/commit/dd17bd1))
* **deps-dev:** update semantic-release requirement ([662a987](https://github.com/wmfs/smithereens/commit/662a987))

# [1.15.0](https://github.com/wmfs/smithereens/compare/v1.14.0...v1.15.0) (2018-11-06)


### 🛠 Builds

* **deps:** update boom requirement from 7.2.1 to 7.2.2 ([838e7ba](https://github.com/wmfs/smithereens/commit/838e7ba))
* **deps-dev:** update semantic-release requirement ([68a3b97](https://github.com/wmfs/smithereens/commit/68a3b97))
* **deps-dev:** update semantic-release requirement ([7cf0727](https://github.com/wmfs/smithereens/commit/7cf0727))

# [1.14.0](https://github.com/wmfs/smithereens/compare/v1.13.0...v1.14.0) (2018-11-01)


### 🛠 Builds

* **deps:** update boom requirement from 7.2.0 to 7.2.1 ([181a701](https://github.com/wmfs/smithereens/commit/181a701))
* **deps-dev:** update semantic-release requirement ([aafa862](https://github.com/wmfs/smithereens/commit/aafa862))

# [1.13.0](https://github.com/wmfs/smithereens/compare/v1.12.0...v1.13.0) (2018-10-23)


### 🛠 Builds

* **deps:** update dottie requirement from 2.0.0 to 2.0.1 ([2ea0088](https://github.com/wmfs/smithereens/commit/2ea0088))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/changelog requirement ([511983b](https://github.com/wmfs/smithereens/commit/511983b))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement ([676abe2](https://github.com/wmfs/smithereens/commit/676abe2))
* **deps-dev:** update nyc requirement from 13.0.1 to 13.1.0 ([83d2575](https://github.com/wmfs/smithereens/commit/83d2575))
* **deps-dev:** update semantic-release requirement ([c9fe7ff](https://github.com/wmfs/smithereens/commit/c9fe7ff))
* **deps-dev:** update semantic-release requirement ([2929723](https://github.com/wmfs/smithereens/commit/2929723))
* **deps-dev:** update semantic-release requirement ([f2f5474](https://github.com/wmfs/smithereens/commit/f2f5474))

# [1.12.0](https://github.com/wmfs/smithereens/compare/v1.11.0...v1.12.0) (2018-10-08)


### 🛠 Builds

* **deps:** update debug requirement from 4.0.1 to 4.1.0 ([042f885](https://github.com/wmfs/smithereens/commit/042f885))
* **deps-dev:** update chai requirement from 4.1.2 to 4.2.0 ([a6ff83b](https://github.com/wmfs/smithereens/commit/a6ff83b))
* **deps-dev:** update semantic-release requirement ([bb26540](https://github.com/wmfs/smithereens/commit/bb26540))
* **deps-dev:** update semantic-release requirement ([15aad23](https://github.com/wmfs/smithereens/commit/15aad23))

# [1.11.0](https://github.com/wmfs/smithereens/compare/v1.10.0...v1.11.0) (2018-09-12)


### 🛠 Builds

* **deps:** update lodash requirement from 4.17.10 to 4.17.11 ([4480782](https://github.com/wmfs/smithereens/commit/4480782))
* **deps-dev:** update semantic-release requirement ([dcfff3f](https://github.com/wmfs/smithereens/commit/dcfff3f))

# [1.10.0](https://github.com/wmfs/smithereens/compare/v1.9.0...v1.10.0) (2018-09-11)


### 🛠 Builds

* **deps:** update debug requirement from 4.0.0 to 4.0.1 ([c302d61](https://github.com/wmfs/smithereens/commit/c302d61))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement ([4fdeced](https://github.com/wmfs/smithereens/commit/4fdeced))

# [1.9.0](https://github.com/wmfs/smithereens/compare/v1.8.0...v1.9.0) (2018-09-11)


### 🛠 Builds

* **deps:** update debug requirement from 3.2.3 to 4.0.0 ([6f78db5](https://github.com/wmfs/smithereens/commit/6f78db5))

# [1.8.0](https://github.com/wmfs/smithereens/compare/v1.7.0...v1.8.0) (2018-09-11)


### 🛠 Builds

* **deps:** update debug requirement from 3.2.1 to 3.2.3 ([fcf0897](https://github.com/wmfs/smithereens/commit/fcf0897))

# [1.7.0](https://github.com/wmfs/smithereens/compare/v1.6.0...v1.7.0) (2018-09-11)


### 🛠 Builds

* **deps:** update debug requirement from 3.1.0 to 3.2.1 ([01c05d3](https://github.com/wmfs/smithereens/commit/01c05d3))
* **deps-dev:** update semantic-release requirement ([4c66595](https://github.com/wmfs/smithereens/commit/4c66595))

# [1.6.0](https://github.com/wmfs/smithereens/compare/v1.5.0...v1.6.0) (2018-09-08)


### 🛠 Builds

* **deps:** update jsonfile requirement from 4.0.0 to 5.0.0 ([e7d7029](https://github.com/wmfs/smithereens/commit/e7d7029))
* **deps-dev:** update codecov requirement from 3.0.4 to 3.1.0 ([484c05d](https://github.com/wmfs/smithereens/commit/484c05d))
* **deps-dev:** update nyc requirement from 12.0.2 to 13.0.1 ([f2a832f](https://github.com/wmfs/smithereens/commit/f2a832f))
* **deps-dev:** update semantic-release requirement ([b1f0022](https://github.com/wmfs/smithereens/commit/b1f0022))
* **dev-deps:** Move to standard 12.0.1 ([6a00925](https://github.com/wmfs/smithereens/commit/6a00925))

# [1.5.0](https://github.com/wmfs/smithereens/compare/v1.4.0...v1.5.0) (2018-08-30)


### 🛠 Builds

* **deps:** update csv-string requirement from 3.1.3 to 3.1.5 ([e80762b](https://github.com/wmfs/smithereens/commit/e80762b))
* **deps-dev:** update semantic-release requirement from 15.9.11 to 15.9.12 ([8c73e4b](https://github.com/wmfs/smithereens/commit/8c73e4b))

# [1.4.0](https://github.com/wmfs/smithereens/compare/v1.3.0...v1.4.0) (2018-08-27)


### 🛠 Builds

* **deps:** update glob requirement from 7.1.2 to 7.1.3 ([03f349d](https://github.com/wmfs/smithereens/commit/03f349d))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement from 7.0.1 to 7.0.2 ([bc40b41](https://github.com/wmfs/smithereens/commit/bc40b41))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement from 7.0.2 to 7.0.3 ([f4f4286](https://github.com/wmfs/smithereens/commit/f4f4286))
* **deps-dev:** update semantic-release requirement from 15.9.6 to 15.9.7 ([dc65881](https://github.com/wmfs/smithereens/commit/dc65881))
* **deps-dev:** update semantic-release requirement from 15.9.7 to 15.9.8 ([a304b5a](https://github.com/wmfs/smithereens/commit/a304b5a))
* **deps-dev:** update semantic-release requirement from 15.9.8 to 15.9.9 ([91f97c6](https://github.com/wmfs/smithereens/commit/91f97c6))
* **deps-dev:** update semantic-release requirement from 15.9.9 to 15.9.11 ([1e498c0](https://github.com/wmfs/smithereens/commit/1e498c0))

# [1.3.0](https://github.com/wmfs/smithereens/compare/v1.2.0...v1.3.0) (2018-08-09)


### ✨ Features

* File description extended to allow constants to be part of the output csv. ([9a475c0](https://github.com/wmfs/smithereens/commit/9a475c0))


### 🐛 Bug Fixes

* **Transformer:** standard ([cb970fa](https://github.com/wmfs/smithereens/commit/cb970fa))


### 🛠 Builds

* **deps-dev:** update semantic-release requirement from 15.9.5 to 15.9.6 ([e098e61](https://github.com/wmfs/smithereens/commit/e098e61))

# [1.2.0](https://github.com/wmfs/smithereens/compare/v1.1.1...v1.2.0) (2018-08-06)


### ✨ Features

* Add 'uuid' column type to generate ids at import time ([520a175](https://github.com/wmfs/smithereens/commit/520a175))


### 🛠 Builds

* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/changelog requirement to 2.1.2 ([db56600](https://github.com/wmfs/smithereens/commit/db56600))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/changelog requirement to 3.0.0 ([1ef97c8](https://github.com/wmfs/smithereens/commit/1ef97c8))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement to 6.0.2 ([ba49aa9](https://github.com/wmfs/smithereens/commit/ba49aa9))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement to 7.0.0 ([469788b](https://github.com/wmfs/smithereens/commit/469788b))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement to 7.0.1 ([ee457df](https://github.com/wmfs/smithereens/commit/ee457df))
* **deps-dev:** update semantic-release requirement to 15.7.2 ([5c7c464](https://github.com/wmfs/smithereens/commit/5c7c464))
* **deps-dev:** update semantic-release requirement to 15.8.0 ([e376f22](https://github.com/wmfs/smithereens/commit/e376f22))
* **deps-dev:** update semantic-release requirement to 15.8.1 ([88c1c04](https://github.com/wmfs/smithereens/commit/88c1c04))
* **deps-dev:** update semantic-release requirement to 15.9.1 ([8c888d2](https://github.com/wmfs/smithereens/commit/8c888d2))
* **deps-dev:** update semantic-release requirement to 15.9.2 ([da74b6c](https://github.com/wmfs/smithereens/commit/da74b6c))
* **deps-dev:** update semantic-release requirement to 15.9.3 ([8384791](https://github.com/wmfs/smithereens/commit/8384791))


### ⚙️ Continuous Integrations

* remove deps-dev scoping release ([bb0e37e](https://github.com/wmfs/smithereens/commit/bb0e37e))


### ♻️ Chores

* codecov 3.0.3 -> 3.0.4, semantic-release 15.9.3 -> 15.9.5 ([bc65d5d](https://github.com/wmfs/smithereens/commit/bc65d5d))
* Correct uuid dependency: ^3.3.2 -> 3.3.2 ([ff2cc73](https://github.com/wmfs/smithereens/commit/ff2cc73))


### 💎 Styles

* Strip rogue semi-colon ([d1b83ee](https://github.com/wmfs/smithereens/commit/d1b83ee))
