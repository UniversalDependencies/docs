---
layout: feature
title: 'NounClass'
shortdef: 'noun class'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td rowspan="2" style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
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

### <a name="Bantu1">`Bantu1`</a>: singular, persons

The corresponding plural class is `Bantu2`.

#### Examples

* [sw] _<b>mtoto</b>_ “child”

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
