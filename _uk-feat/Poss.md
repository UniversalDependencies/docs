---
layout: feature
title: 'Poss'
shortdef: 'possessive'
---

Boolean feature of pronouns, determiners or adjectives.  It tells whether the word is possessive.

While many tagsets would have “possessive” as one of the various pronoun types, this feature is intentionally separate from [PronType](), as it is orthogonal to pronominal types. Several of the pronominal types can be optionally possessive, and adjectives can too.

### `Yes`: it is possessive

Note that there is no `No` value. If the word is not possessive, the `Poss` feature will just not be mentioned in the `FEAT` column. (Which means that empty value has the `No` meaning.)

#### Examples

* possessive personal pronouns/determiners: _мій, твій, його, її, наш, ваш, їх&nbsp;_ “my, your, his, her, our, your, their”
* possessive reflexive pronoun/determiner: _свій&nbsp;_ “one's own”
* possessive relative or interrogative pronoun/determiner: _чий&nbsp;_ “whose”
* possessive negative pronoun/determiner: _нічий&nbsp;_ “nobody's”
* possessive indefinite pronoun/determiner: _чийсь&nbsp;_ “somebody's”

<!--possessive adjectives: _Петрів&nbsp;_ “Peter's”, _материн&nbsp;_ “mother's”-->

