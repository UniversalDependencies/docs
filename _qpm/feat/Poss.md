---
layout: feature
title: 'Poss'
shortdef: 'possessive'
udver: '2'
---

## Poss

Boolean feature of pronouns, determiners or adjectives.  It specifies a word as possessive or not possessive.

While many tagsets would have "possessive" as one of the various pronoun types, this feature has been intentionally kept separate from [PronType](PronType.html), 
as it is orthogonal to pronominal types. Several of the pronominal types can be optionally possessive, and adjectives can too.


### <a name="Yes">`Yes`</a>: it is possessive

In Pomak, the feature 'Poss=Yes is assigned to some pronoun types.

Note that there is no `No` value. If the word is not possessive, the `Poss` feature will just not be mentioned in the `FEAT` column:
 the empty value has the `No` meaning.

#### Examples [qpm]


* possessive personal pronouns:
    * _moj, tvoj, tógov / tógav, tójin, naš, vаš, tǽhan_ "mine, yours, his / hers /its, our, yours, their"  
* possesive interrogative pronouns:
    * _číjje_ "who's ?"  
* possesive relative pronouns:
    * _číjjeso / číjjeto / číjjeno_ "whoever's"  
* possesive adjectives:
    * _bubájkov "of the father / father's", brátov / bátev "of the brother / brother's", dǽdov "of the grandfahter / grandfather's", kalékov "of the uncle / uncle's", újkov "of the uncle / uncle's", amíǧev "of the uncle / uncle's", májčin "of the mother / mother's", séstrin / búlin "of the sister / sister's", nevǽstin "of the daughter in law", bábin "of the grandmother / grandmother's" , lélin "of the aunt / aunt's", účinin "of the aunt / aunt's", starčinín "of the aunt / aunt's"_

<!-- Interlanguage links updated Po lis 14 15:34:55 CET 2022 -->
