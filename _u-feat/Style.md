---
layout: feature
title: 'Style'
shortdef: 'style or sublanguage to which this word form belongs'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Arch">Arch</a></td>
  <td><a href="#Coll">Coll</a></td>
  <td><a href="#Expr">Expr</a></td>
  <td><a href="#Form">Form</a></td>
  <td><a href="#Rare">Rare</a></td>
  <td><a href="#Slng">Slng</a></td>
  <td><a href="#Vrnc">Vrnc</a></td>
  <td><a href="#Vulg">Vulg</a></td>
</tr>
</table>

This may be a lexical feature (some words-lemmas are archaic, some are colloquial) or a morphological feature
(inflectional patterns may systematically change between dialects or styles).
English pronouns offer a useful case study: _<b>thou</b>_ is archaic;
_<b>whom</b>_ is often somewhat formal; _<b>ya</b>_ is colloquial, used in a casual/familiar way (_See <b>ya</b>!_);
_<b>y'all</b>_ is vernacular (especially associated with certain regions);
and <b>wtf</b> is arguably an expressive variant of the pronoun _what_ in contexts where a nominal is required
(_<b>Wtf</b> are you doing?!_).

Besides real morphology, the choices that make a particular word form
belong to a different style may also be orthographic.

This feature could be used in many languages but only a few choose to actually annotate it.
Seen in Bulgarian, Czech, Danish, English, Finnish and Hungarian.

### <a name="Arch">`Arch`</a>: archaic, obsolete

This value should be used if it is desirable in a language to mark archaic lexemes or archaic morphological forms.
Language-specific guidelines must define what exactly it means to be archaic. Note that there are theoretical
problems, especially if we want to annotate diachronic corpora with various stages of the language. There is only
one set of guidelines per language, which should accommodate all stages and genres. It would be unfortunate if
most words in older texts had to be labeled as `Style=Arch`. Hence, the only useful application of the feature is
probably for words that were already archaic at the time of production of the text.

#### Examples

* [en] _<b>Thou shalt</b> not kill._
  (The modern equivalent would be _You shall not kill._)

### <a name="Rare">`Rare`</a>: rare

#### Examples

* [cs] _Co ale dohnalo mladého <b>ambiciosního</b> člověka k sebevraždě?_ “But what drove the young, ambitious man to commit suicide?”
  (The more frequent equivalent would be _ambiciózního_.)

### <a name="Form">`Form`</a>: formal, literary

#### Examples

* [da] _Det vil hindre mange misforståelser mellem <b>vore</b> to partier._ “It will prevent many misunderstandings between our two parties.”

<!-- not used so far ### <a name="Poet">`Poet`</a>: poetic -->

### <a name="Coll">`Coll`</a>: colloquial

#### Examples

* [cs] _Pojedete do zahraničí s <b>cestovkou</b>?_ “Are you going abroad with a travel agency?”
  (The more formal equivalent would be _cestovní kanceláří_.)

### <a name="Vrnc">`Vrnc`</a>: vernacular

#### Examples

* [cs] _A tak jsem po čase dělal kmotra nové knize: "Slovácko <b>sa nesúdí</b>"._ “And so, over time, I made the godfather of a new book: "Slovácko sa nesúdí" ("Slovácko does not judge").”
  (This is an East-Moravian dialect of Czech; its standard equivalent would be _se nesoudí_.)

### <a name="Slng">`Slng`</a>: slang

#### Examples

* [cs] _Superdobrý <b>kšeft</b> ovlivňuje jednoznačně počasí._ “The super-good business is clearly affected by the weather.”
  (A more neutral equivalent would be _obchod, výnos, výdělek_.)

### <a name="Expr">`Expr`</a>: expressive, emotional

This indicates a distinctive morphological or spelling choice for added expressiveness (with respect to pronunciation or meaning).

In the case of an expressive spelling variant, this feature should be paired with a `CorrectForm` in the MISC column, as explained in [the page on typos](/u/overview/typos.html).
Compare the [Typo]() feature, which covers errors and typographical unexpectedness.




#### Examples

* [cs] _Vezeme také několik set <b>čokoládiček</b>._ “We also take several hundred chocolates.”
  (The diminutive signals affection rather than size. The neutral equivalent would be _čokolád_.)
* [en] Kinds of expressive spelling variation include: expressive lengthening (_<b>niiiiice</b>_), dialectal or colloquial pronunciation (_<b>Hahvahd</b>_), censored characters (_<b>sh*t</b>_), symbolic characters (_<b>CA$H</b>_), etc. As _<b>CA$H</b>_ defies typographical convention it should also be labeled [Typo]()`=Yes`.

<!-- not used so far ### <a name="Derg">`Derg`</a>: derogatory -->

### <a name="Vulg">`Vulg`</a>: vulgar

#### Examples

* [cs] _Doporučuji vrátit <b>parchanta</b> do košíčku, postrčit po vodě a na hloubce ho převrhnout._ “I recommend returning the bastard to the basket, pushing it over the water and overturning it at depth.”

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:06 CET -->
