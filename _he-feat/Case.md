---
layout: feature
title: 'Case'
shortdef: 'case'
---

In Hebrew, the `Case` feature serves to mark the cliticized forms `et` (`את`) and `šel` (`של`) for accusative and genetive case respectively, as well as their fused appearances in personal [pronouns](he-pos/PRON) and [nouns](he-pos/NOUN). The temporal case is marked on the prefixes `kše` (`כש`) and `mi-še` (`מש-`).

### `Acc`: accusative

In addition to the basic [particle](he-pos/PART)
* את _et_ ,

the following forms are the closed set of pronouns inflected in the accusative case:
* אותי, אותך, אותו, אותה, אותנו, אתכם, אתכן, אותם, אותן _oti, otxa/otax, oto, ota, otanu, etxem, etxen, otam, otan_

While these are full tokens, in the data they are split to include the basic (nominative) pronoun being inflected as well.

#### Examples:

* מצאנו <b>אותה</b> _matsanu <b>ota</b>_ "We found <b>her</b>" (words: אותה היא)

In some cases, the accusative case may be fused as an object marker to a verb, in which case the accusative word will be split from the token.

#### Examples:

* הלכנו אל הבית ואז <b>צבענוהו</b> _halaxnu el ha-bayit v-az <b>tsva'nuhu</b>_ "We went to the house and then <b>we painted it</b>" (words: צבענו הוא)

### `Gen`: genetive

In addition to the basic [particle](he-pos/PART)
* של _šel_ ,

all Hebrew nouns can be inflected for a genetive case. In such cases, the fused suffix will be separated from the token and marked as genetive, with the word form being the basic (nominative) form of the appropriate pronoun.

#### Examples:

* זה היה <b>ביתי</b> _ze haya <b>beiti</b>_ "this was <b>my home</b>" (words: _ביתי אני_)

### `Tem`: temporal

The temporal case marks numerical time expressions, as well as the temporal prefixes `kše` (`כש`) and `mi-še` (`מש-`).