---
layout: feature
title: 'Animacy'
shortdef: 'animacy'
---

In contrast to some other languages, the Slovenian tagset does not consider `Animacy` to be a lexical feature, as certain types of inanimate nouns, such as institutions, personified objects, brand names etc., often take on both semantic and grammatical features of animate nouns.

Animacy is thus only marked as an inflectional feature of [masculine](Gender) [nouns](NOUN) and [proper nouns](PROPN) to distinguish between animate and inanimate word forms in [accusative](Case) [singular](Number), e.g. _Odstrigla si je <b>koder</b>._ "She cut off a curl." (inanimate) vs. _Videla je <b>kodra</b>._ "She saw a poodle." (animate).

### `Anim`: animate

`Animate` value is attributed to masculine nouns in accusative singular usually ending in -a:

* _človeka_ "man", _delfina_ "dolphin", _Davida_ "David", _ministra_ "minister"

Note that grammatical animatness can also apply to semantically inanimate nouns, such as car names, personified objects, brand names, card names etc.

* _Renaulta_ "Renault", _pomivalca_ "washing machine", _bordojca_ "Bordeaux wine", _asa_ "ace" etc.


### `Inan`: inanimate

`Inanimate` value is attributed to all other masculine nouns in accusative singular:

* _avto_ "car", _fikus_ "ficus", _čevelj_ "shoe"


### Conversion from JOS

All nouns with Animate=yes are converted to `Animacy=Anim` and all nouns with Animate=no are converted to `Animacy=Inan`.
<!-- Interlanguage links updated Út zář 29 20:31:33 CEST 2020 -->
