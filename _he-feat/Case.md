---
layout: feature
title: 'Case'
shortdef: 'case'
---

In Hebrew, the `Case` feature serves to mark the cliticized forms `at` (`את`) and `fl` (`של`) for accusative and genetive case respectively, as well as their fused appearances in personal [pronouns](he-pos/PRON) and [nouns](he-pos/NOUN). The temporal case is marked on the prefixes `kf` (`כש`) and `mf` (`מש`).

### `Acc`: accusative

In addition to the basic [particle](he-pos/PART)
* את _at_ ,

the following forms are the closed set of pronouns inflected in the accusative case:
* אותי, אותך, אותו, אותה, אותנו, אתכם, אתכן, אותם, אותן _avti, avtk, avtv, avth, avtnv, atkm, atkn, avtm, avtn_

While these are full tokens, in the data they are split to include the basic (nominative) pronoun being inflected as well.

#### Examples:

* מצאנו <b>אותה</b> _mcanv <b>avth</b>_ "We found <b>her</b>" (words: אותה היא)

In some cases, the accusative case may be fused as an object marker to a verb, in which case the accusative word will be split from the token.

#### Examples:

* הלכנו אל הבית ואז <b>צבענוהו</b> _hlknv al hbit vaz <b>cbenvhv</b>_ "We went to the house and then <b>we painted it</b>" (words: צבענו הוא)

### `Gen`: genetive

In addition to the basic [particle](he-pos/PART)
* של _fl_ ,

all Hebrew nouns can be inflected for a genetive case. In such cases, the fused suffix will be separated from the token and marked as genetive, with the word form being the basic (nominative) form of the appropriate pronoun.

#### Examples:

* זה היה <b>ביתי</b> _zh hyh <b>biti</b>_ "this was <b>my home</b>" (words: _ביתי אני_)

### `Tem`: temporal

The temporal case marks numerical time expressions, as well as the temporal prefixes `kf` (`כש`) and `mf` (`מש-`).