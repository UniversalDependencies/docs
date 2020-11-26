---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
---

In English, this feature applies to [pronouns](en-pos/PRON),
[determiners](en-pos/DET) and pronominal [adverbs](u-pos/ADV).

### <a name="Prs">`Prs`</a>: personal or possessive personal pronoun or determiner

See also the [Poss]() feature that distinguishes normal personal
pronouns from possessives. Note that `Prs` also includes reflexive
personal/possessive pronouns.

The following pronouns have this feature:

* _I, you, he, she, it, we, they, my, your, his, her, its, our,
  their, mine, yours, hers, ours, theirs, me, him, us, them, 
  myself, yourself, himself, herself, itself, ourselves, youselves,
  theirselves_

### <a name="Art">`Art`</a>: article

Article is a special case of determiner that bears the feature of
[definiteness](Definite).

In English, the following three determiners have this feature:

* _a, an, the_ 

### <a name="Int">`Int`</a>: interrogative pronoun, determiner or adverb

Note that the possessive interrogative determiner (_whose_) can be
distinguished by the [Poss]() feature.

In English, all words with the PTB tag `WDT`, `WP`, `WP$` or `WRB` have this feature unless
they mark the beginning of a [relative clause](en-dep/acl:relcl).

#### Examples:
* _<b>Which</b> one should I get?_
* _<b>Who</b> was elected president?_
* _<b>Whose</b> car is this?_
* _<b>How</b> old is he?_

### <a name="Rel">`Rel`</a>: relative pronoun or determiner

All pronouns and determiners that mark the beginning of a [relative clause](en-dep/acl:relcl) have this feature.

#### Examples: 

* _The book <b>that</b> I read_
* _The book <b>which</b> she bought_
* _The book <b>whose</b> author was arrested_

### <a name="Dem">`Dem`</a>: demonstrative determiner or adverb

The following determiners and adverbs have this feature:

* _this, that, those, these, here, there_

Note that _that_ only has this feature when it is being used as a demonstrative determiner. If it is used to mark the beginning of a [clausal complement](en-dep/ccomp) or a [relative clause](en-dep/acl:relcl) it does not have this feature.
<!-- Interlanguage links updated Čt lis 12 09:43:06 CET 2020 -->
