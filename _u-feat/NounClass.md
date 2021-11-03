---
layout: feature
title: 'NounClass'
shortdef: 'noun class'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td rowspan="5" style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Bantu1">Bantu1</a></td>
  <td><a href="#Bantu2">Bantu2</a></td>
  <td><a href="#Bantu3">Bantu3</a></td>
  <td><a href="#Bantu4">Bantu4</a></td>
  <td><a href="#Bantu5">Bantu5</a></td>
  <td><a href="#Bantu6">Bantu6</a></td>
  <td><a href="#Bantu7">Bantu7</a></td>
  <td><a href="#Bantu8">Bantu8</a></td>
  <td><a href="#Bantu9">Bantu9</a></td>
  <td><a href="#Bantu10">Bantu10</a></td>
</tr>
<tr>
  <td><a href="#Bantu11">Bantu11</a></td>
  <td><a href="#Bantu12">Bantu12</a></td>
  <td><a href="#Bantu13">Bantu13</a></td>
  <td><a href="#Bantu14">Bantu14</a></td>
  <td><a href="#Bantu15">Bantu15</a></td>
  <td><a href="#Bantu16">Bantu16</a></td>
  <td><a href="#Bantu17">Bantu17</a></td>
  <td><a href="#Bantu18">Bantu18</a></td>
  <td><a href="#Bantu19">Bantu19</a></td>
  <td><a href="#Bantu20">Bantu20</a></td>
</tr>
<tr>
  <td><a href="#Bantu21">Bantu21</a></td>
  <td><a href="#Bantu22">Bantu22</a></td>
  <td><a href="#Bantu23">Bantu23</a></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td><a href="#Wol1">Wol1</a></td>
  <td><a href="#Wol2">Wol2</a></td>
  <td><a href="#Wol3">Wol3</a></td>
  <td><a href="#Wol4">Wol4</a></td>
  <td><a href="#Wol5">Wol5</a></td>
  <td><a href="#Wol6">Wol6</a></td>
  <td><a href="#Wol7">Wol7</a></td>
  <td><a href="#Wol8">Wol8</a></td>
  <td><a href="#Wol9">Wol9</a></td>
  <td><a href="#Wol10">Wol10</a></td>
</tr>
<tr>
  <td><a href="#Wol11">Wol11</a></td>
  <td><a href="#Wol12">Wol12</a></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
</table>

`NounClass` is similar to [Gender]() and [Animacy]() because it is to a large part
a lexical category of [nouns](u-pos/NOUN) and other parts of speech inflect for it
to show agreement ([pronouns](u-pos/PRON), [adjectives](u-pos/ADJ),
[determiners](u-pos/DET), [numerals](u-pos/NUM), [verbs](u-pos/VERB)).

The distinction between gender and noun class is not sharp and is partially
conditioned by the traditional terminology of a given language family. In general,
the feature is called gender if the number of possible values is relatively low
(typically 2-4) and the partition correlates with sex of people and animals.
In language families where the number of categories is high (10-20), the feature
is usually called noun class. No language family uses both the features.

In Bantu languages, the noun class also encodes [Number](); therefore it is
a lexical-inflectional feature of nouns. The words should be annotated with
the `Number` feature in addition to `NounClass`, despite the fact that people
who know Bantu could infer the number from the noun class. The lemma of the
noun should be its singular form.

The set of values of this feature is specific for a language family or group.
Within the group, it is possible to identify classes that have similar meaning
across languages (although some classes may have merged or disappeared in
some languages in the group). The value of the `NounClass` feature consists
of a short identifier of the language group (e.g., `Bantu`), and the number
of the class (there is a standardized class numbering system accepted by
scholars of the various Bantu languages; similar numbering systems should be
created for the other families that have noun classes).

## List of noun classes in Swahili

(from [https://en.wikipedia.org/wiki/Noun_class](https://en.wikipedia.org/wiki/Noun_class#Bantu_languages))

<table class="wikitable">
<tbody><tr>
<th>Class number</th>
<th>Prefix</th>
<th>Typical meaning</th>
</tr>
<tr>
<td>1</td>
<td><i>m-, mw-, mu-</i></td>
<td>singular: persons</td>
</tr>
<tr>
<td>2</td>
<td><i>wa-, w-</i></td>
<td>plural: persons (a plural counterpart of class 1)</td>
</tr>
<tr>
<td>3</td>
<td><i>m-, mw-, mu-</i></td>
<td>singular: plants</td>
</tr>
<tr>
<td>4</td>
<td><i>mi-, my-</i></td>
<td>plural: plants (a plural counterpart of class 3)</td>
</tr>
<tr>
<td>5</td>
<td><i>ji-, j-,</i> Ø-</td>
<td>singular: fruits</td>
</tr>
<tr>
<td>6</td>
<td><i>ma-, m-</i></td>
<td>plural: fruits (a plural counterpart of class 5, 9, 11, seldom 1)</td>
</tr>
<tr>
<td>7</td>
<td><i>ki-, ch-</i></td>
<td>singular: things</td>
</tr>
<tr>
<td>8</td>
<td><i>vi-, vy-</i></td>
<td>plural: things (a plural counterpart of class 7)</td>
</tr>
<tr>
<td>9</td>
<td><i>n-, ny-, m-,</i> Ø-</td>
<td>singular: animals, things</td>
</tr>
<tr>
<td>10</td>
<td><i>n-, ny-, m-,</i> Ø-</td>
<td>plural: animals, things (a plural counterpart of class 9 and 11)</td>
</tr>
<tr>
<td>11</td>
<td><i>u-, w-, uw-</i></td>
<td>singular: no clear semantics</td>
</tr>
<tr>
<td>15</td>
<td><i>ku-, kw-</i></td>
<td>verbal nouns</td>
</tr>
<tr>
<td>16</td>
<td><i>pa-</i></td>
<td>locative meanings: close to something</td>
</tr>
<tr>
<td>17</td>
<td><i>ku-</i></td>
<td>indefinite locative or directive meaning</td>
</tr>
<tr>
<td>18</td>
<td><i>mu-, m-</i></td>
<td>locative meanings: inside something</td>
</tr>
</tbody></table>

### <a name="Bantu1">`Bantu1`</a>: singular, persons

The corresponding plural class is `Bantu2`.

#### Examples

* [sw] _<b>mtoto</b>_ “child”

### <a name="Bantu2">`Bantu2`</a>: plural, persons

The corresponding singular class is `Bantu1`.

#### Examples

* [sw] _<b>watoto</b>_ “children”

### <a name="Bantu3">`Bantu3`</a>: singular, plants, thin objects

The corresponding plural class is `Bantu4`.

#### Examples

* [sw] _<b>mti</b>_ “tree”

### <a name="Bantu4">`Bantu4`</a>: plural, plants, thin objects

The corresponding singular class is `Bantu3`.

#### Examples

* [sw] _<b>miti</b>_ “trees”

### <a name="Bantu5">`Bantu5`</a>: singular, fruits, round objects, paired things

The corresponding plural class is `Bantu6`.

#### Examples

* [sw] _<b>jiwe</b>_ “stone”

### <a name="Bantu6">`Bantu6`</a>: plural, fruits, round objects, paired things

The corresponding singular class is `Bantu5`, also `Bantu9`, `Bantu11`, seldomly `Bantu1`.

#### Examples

* [sw] _<b>mawe</b>_ “stones”

### <a name="Bantu7">`Bantu7`</a>: singular, things, diminutives

The corresponding plural class is `Bantu8`.

#### Examples

* [sw] _<b>kitabu</b>_ “book”

### <a name="Bantu8">`Bantu8`</a>: plural, things, diminutives

The corresponding singular class is `Bantu7`.

#### Examples

* [sw] _<b>vitabu</b>_ “books”

### <a name="Bantu9">`Bantu9`</a>: singular, animals, things

The corresponding plural class is `Bantu10` or `Bantu6`.

#### Examples

* [sw] _<b>ndege</b>_ “bird”

### <a name="Bantu10">`Bantu10`</a>: plural, animals, things

The corresponding singular class is `Bantu9`.

#### Examples

* [sw] _<b>ndege</b>_ “birds” (plural of the noun is identical to singular; however, verbs agree with the _<b>zi-</b>_ prefix in plural and with _i-_ in singular)

### <a name="Bantu11">`Bantu11`</a>: long thin objects, natural phenomena, abstracts

#### Examples

* [sw] _<b>utoto</b>_ “childhood”

### <a name="Bantu12">`Bantu12`</a>: singular, small things, diminutives

The corresponding plural class is `Bantu13` or `Bantu14`.

#### Examples

* [lg] _embwa_ “dog” → _<b>akabwa</b>_ “puppy”

### <a name="Bantu13">`Bantu13`</a>: plural or mass, small amount of mass

#### Examples

* [lg] _mazzi_ “water” → _<b>otuzzi</b>_ “drop of water”

### <a name="Bantu14">`Bantu14`</a>: plural, diminutives

In Ganda, this is the plural counterpart of `Bantu12`.

#### Examples

* [lg] _<b>obubwa</b>_ “puppies”

### <a name="Bantu15">`Bantu15`</a>: verbal nouns, infinitives

#### Examples

* [sw] _-soma_ “read” → _<b>kusoma</b>_ “reading; to read”

### <a name="Bantu16">`Bantu16`</a>: definite location, close to something

#### Examples

* [sw] _<b>pahali</b>_ “place”

### <a name="Bantu17">`Bantu17`</a>: indefinite location, direction, movement

#### Examples

* [sw] _<b>kule</b>_ “there”

### <a name="Bantu18">`Bantu18`</a>: definite location, inside something

#### Examples

* [sw] _<b>mule</b>_ “in there”

### <a name="Bantu19">`Bantu19`</a>: little bit of, pejorative plural

Bantu class 19 may signify “a little bit of” or a plural with a pejorative nuance, as in Hunde.

#### Examples

* [hke] _<b>hyùndù</b>_ “a bit of porridge”
* [hke] _<b>hìkátsì</b>_ “frail females”
* [hke] _<b>hyábánà</b>_ “thin children”

### <a name="Bantu20">`Bantu20`</a>: singular, augmentatives

In Ganda, the corresponding plural class is `Bantu6` or `Bantu22`.

#### Examples

* [lg] _musajja_ “man” → _<b>ogusajja</b>_ “giant”

### <a name="Bantu21">`Bantu21`</a>: singular, augmentatives, derogatives

#### Examples

* [ve] _<b>ḓinga</b>_ “large lump of earth”
* [ve] _<b>ḓanḓa</b>_ “big clumsy hand”

### <a name="Bantu22">`Bantu22`</a>: plural, augmentatives

The corresponding singular class is `Bantu20`.

#### Examples

* [lg] _<b>agasajja</b>_ “giants”

### <a name="Bantu23">`Bantu23`</a>: location with place names

#### Examples

* [lg] _<b>elugala</b>_ “at Lugala”

## Noun Classes in Wolof

<!-- https://github.com/UniversalDependencies/docs/issues/592 -->

Wolof is a non-Bantu Niger-Congo language. It has noun classes but their semantics
cannot be easily mapped on the Bantu classes. The class is morphologically unmarked
on nouns (although it is an inherent property of the lexeme) but determiners have
to show agreement with the class.

The Wolof noun class system lacks semantic coherence. One reason for this is that
in Wolof noun classification is sometimes based on other factors than semantics,
including phonology and morphology. And still these are just some tendencies, but in
most cases there is no clear semantics, phonology or morphology that can explain the
classification in Wolof.

#### Examples

The following table shows the forms of proximate demonstratives in the first ten noun classes;
classes 2 and 8 are plural, the rest are singular.

<table class="wikitable">
<tr><td><tt>Wol1</tt></td><td><tt>Wol2</tt></td><td><tt>Wol3</tt></td><td><tt>Wol4</tt></td><td><tt>Wol5</tt></td><td><tt>Wol6</tt></td><td><tt>Wol7</tt></td><td><tt>Wol8</tt></td><td><tt>Wol9</tt></td><td><tt>Wol10</tt></td><td>English</td></tr>
<tr><td><i>ki</i></td><td></td><td><i>gi</i></td><td><i>ji</i></td><td><i>bi</i></td><td><i>mi</i></td><td><i>li</i></td><td></td><td><i>si</i></td><td><i>wi</i></td><td>“this”</td></tr>
<tr><td></td><td><i>ñi</i></td><td></td><td></td><td></td><td></td><td></td><td><i>yi</i></td><td></td><td></td><td>“these”</td></tr>
</table>

Wolof classes 11 and 12, although behaving like noun classes, have meanings that are adverbial rather than nominal:
class 11 is for location, class 12 for manner.

<table class="wikitable">
<tr><td><tt>Wol11</tt></td><td><tt>Wol12</tt></td></tr>
<tr><td><i>fi</i> “here”</td><td><i>ni</i> “so”</td></tr>
</table>

### <a name="Wol1">`Wol1`</a>: Wolof noun class 1/k (singular human)

#### Examples

* [wo] _nitug Afrig <b>ki</b>_

### <a name="Wol2">`Wol2`</a>: Wolof noun class 2/ñ (plural human)

#### Examples

* [wo] _jigéen <b>ñi</b>_

### <a name="Wol3">`Wol3`</a>: Wolof noun class 3/g (singular)

#### Examples

* [wo] _dexug Gaambi <b>gi</b>_

### <a name="Wol4">`Wol4`</a>: Wolof noun class 4/j (singular)

#### Examples

* [wo] _<b>jenn</b> jamono <b>ji</b>_

### <a name="Wol5">`Wol5`</a>: Wolof noun class 5/b (singular)

For example, “dog” is in the b class.

#### Examples

* [wo] _xaj <b>bi</b>_ “this dog” (dog class-DEF.PROX)
* [wo] _xaj <b>ba</b>_ “that dog” (dog class-DEF.REMT)
* [wo] _buur <b>bi</b>_

### <a name="Wol6">`Wol6`</a>: Wolof noun class 6/m (singular)

For example, “sheep” is in the m class.

#### Examples

* [wo] _xar <b>mi</b>_ “this sheep” (sheep class-DEF.PROX)
* [wo] _at <b>mi</b>_

### <a name="Wol7">`Wol7`</a>: Wolof noun class 7/l (singular)

#### Examples

* [wo] _ndongo <b>li</b>_

### <a name="Wol8">`Wol8`</a>: Wolof noun class 8/y (plural non-human)

#### Examples

* [wo] _nguur <b>yii</b>_

### <a name="Wol9">`Wol9`</a>: Wolof noun class 9/s (singular)

#### Examples

* [wo] _sàmm <b>si</b>_

### <a name="Wol10">`Wol10`</a>: Wolof noun class 10/w (singular)

#### Examples

* [wo] _sama nag <b>wa</b>_

### <a name="Wol11">`Wol11`</a>: Wolof noun class 11/f (location)

#### Examples

* [wo] _<b>fi</b>_ “here”
* [wo] _<b>fa</b>_ “there”

### <a name="Wol12">`Wol12`</a>: Wolof noun class 12/n (manner)

#### Examples

* [wo] _<b>ni</b>_ “so”

<!-- Interlanguage links updated St lis 3 20:58:23 CET 2021 -->
