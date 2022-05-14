---
layout: feature
title: 'Poss'
shortdef: 'possessive'
udver: '2'
---

## Poss

Boolean feature of pronouns, determiners or adjectives.  It specifies a word as possessive or not possessive.

While many tagsets would have "possessive" as one of the various pronoun types, this feature is intentionally separate from [PronType](PronType.html), 
as it is orthogonal to pronominal types. Several of the pronominal types can be optionally possessive, and adjectives can too.

### <a name="Yes">`Yes`</a>: it is possessive

In Pomak, the feature 'Poss=Yes is assigned to some pronoun types.

Note that there is no `No` value. If the word is not possessive, the `Poss` feature will just not be mentioned in the `FEAT` column:
 the empty value has the `No` meaning.

#### Examples

* κτητικές προσωπικές αντωνυμίες:
    * _moj, tvoj, tógov / tógav, tójin, naš, vаš, tǽhan_ "δικός μου, δικός σου, δικός του, δικός της, δικός μας, δικός σας, δικός τους"
* κτητικές ερωτηματικές αντωνυμίες:
    * _číjje_ "ποιανού / τίνος"
* κτητικές αναφορικές αντωνυμίες:
    * _číjjeso / číjjeto / číjjeno_ "οποιανού, οποιανής, οποιανών"
* κτητικά επίθετα:
    * _bubájkov, brátov / bátev, dǽdov, kalékov, újkov, amíǧev, májčin, séstrin / búlin, nevǽstin, bábin, lélin, účinin, starčinín_ "του πατέρα, του αδερφού, του παππού, του θείου, του θείου, του θείου, της μητέρας, της αδερφής, της νύφης, της γιαγιάς, της θείας, της θείας, της θείας"

<!-- Interlanguage links updated So kvě 14 19:02:34 CEST 2022 -->
