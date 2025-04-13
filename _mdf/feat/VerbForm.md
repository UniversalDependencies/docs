---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
udver: '2'
---
<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Conv">Conv</a></td>
  <td><a href="#Fin">Fin</a></td>
  <td><a href="#Inf">Inf</a></td>
  <td><a href="#NomAg">NomAg</a></td>
  <td><a href="#Part">Part</a></td>
  <td><a href="#Vnoun">Vnoun</a></td>
</tr>
</table>

Even though the name of the feature seems to suggest that it is used
exclusively with [verbs](mdf-pos/VERB), this is not the case.
The `Part` value can also be used with [adjectives](mdf-pos/ADJ), while
the `NomAg` and `Vnoun` value can also be used with [nouns](mdf-pos/NOUN).


### <a name="Conv">`Conv`</a>: converb, gerund

The converb, also called adverbial participle or traditionally gerund, is a non-finite
verb form that shares properties of verbs and adverbs.

#### Examples

- _кона <b>эцезь</b> эцеф видьмода-эрьгада_ “which is <b>really (lit. stuffing)</b> stuffed with seeds and perls”

### <a name="Fin">`Fin`</a>: finite

Finite verb occurs in the conditional, subjunctive (aka conjunctive), conditional-subjunctive desiderative indicative, imperative, optative or precative.

#### Examples

- _сими_ &nbsp;“he/she/it drinks”
- _корхтайхть_ &nbsp;“they talk”

### <a name="Inf">`Inf`</a>: infinitive

The (first) infinitive is the citation form of verbs /-Oms/.
It is also appears as the argument of modal and other verbs.

#### Examples

- _эряви симомс_ &nbsp;“have to drink”
- _эряви корхтамс_ &nbsp;“have to talk”

### <a name="NomAg">`NomAg`</a>: Nomen Agensis

The Nomen Agensis is derived from a verb with an agent or performer, and it represents the nominalization of the subject. `-Ы`

#### Examples

* [mdf] _— Вов вдь мянь коза пачфти тяфтама <b>ётафтысь</b>._ "— So, you even see where this kind of <b>conductor</b> will get you.."

### <a name="Part">`Part`</a>: Participle

Words in participle forms are assigned the `VerbForm` value `Part`.
Participle forms are further differentiated using the feature
[PartForm]().

#### Examples

* [mdf] _— колмоцьке танкатне ульсть <b>путфт</b> вастоваст_ "— all three of the tanks were <b>put</b> in their places"

### <a name="Sup">`Sup`</a>: supine aka second/nominative/locative infinitive

The second infinitive in /-Omo-/, /-Oma/ aka the
nominative, locative or even supine. Before a possessive suffix the Schwa is written in ‹o›, but word-finally in ‹a›. Like its Finnish, Estonian
and Slavic counterparts is used instead of the first infinitive as the
argument of motion verbs and inchoative verbs.

#### Examples

- _ушедсь покодема_ &nbsp;“began working”
- _тусь покодема_ &nbsp;“went to work”
- _сась корхтама_ &nbsp;“came to talk”

### <a name="Vnoun">`Vnoun`</a>: verbal noun

The verbal noun in Moksha represents a mixture of verb and nominal features.

#### Examples

* [mdf] _Рамаль хуш тядязень <b>муськома</b> очконц эшка._ "should have bought one the size of my mother's washing trough"

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:10 CET -->
