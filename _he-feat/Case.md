---
layout: feature
title: 'Case'
shortdef: 'case'
---

In Hebrew, the `Case` feature serves to mark the cliticized forms `et` (`את`) and `šel` (`של`) for accusative and genetive case respectively, as well as their fused appearances in personal [pronouns](he-pos/PRON) and [nouns](he-pos/NOUN).

### `Acc`: accusative

In addition to the basic [particle](he-pos/PART)
* _את_ ,

the following forms are the closed set of pronouns inflected in the accusative case:
* _אותי, אותך, אותו, אותה, אותנו, אתכם, אתכן, אותם, אותן_

While these are full tokens, in the data they are split to include the basic (nominative) pronoun being inflected as well.

#### Examples:

* _מצאנו <b>אותה</b>_ (words: _אותה היא_)

In some cases, the accusative case may be fused as an object marker to a verb, in which case the accusative word will be split from the token.

#### Examples:

* _הלכנו אל הבית ואז <b>צבענוהו</b>_ (words: _צבענו הוא_)

### `Gen`: genetive

In addition to the basic [particle](he-pos/PART)
* _של_ ,

all Hebrew nouns can be inflected for a genetive case. In such cases, the fused suffix will be separated from the token and marked as genetive, with the word form being the basic (nominative) form of the appropriate pronoun.

#### Examples:

* _זה היה <b>ביתי</b>_ (words: _ביתי אני_)

### `Tem`: temporal

The temporal case marks numerical time expressions, as well as the temporal prefixes `kše` (`כש`) and `mi-še` (`מש-`).