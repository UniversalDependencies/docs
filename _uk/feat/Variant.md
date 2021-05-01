---
layout: feature
title: 'Variant'
shortdef: 'alternative form of word'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Short">Short</a></td>
  <td><a href="#Uncontr">Uncontr</a></td>
</tr>
</table>

Sometimes there are multiple word forms for the same lemma and set of features.
The `Variant` feature helps distinguish alternate forms.

In Czech there are two groups of words where double forms are regular and worth capturing:
short forms of [adjectives](cs-pos/ADJ) and short (clitic) forms of personal [pronouns](cs-pos/PRON).
This feature only marks the non-standard short forms, hence there is only one value, `Short`.
For the long standard forms the `Variant` feature remains unspecified.

### <a name="Short">`Short`</a>: short form of adjectives or personal pronouns

The short form is called _nominal form of adjective (jmenný tvar přídavného jména),_
as opposed to the long form, which is _pronominal_ because it originated as
a combination of a nominal form and a personal pronoun. But this is ancient history of the
language. In modern Czech, only a subset of the nominal forms survive, and using them sometimes sounds
slightly archaic. They are used as nominal predicates with copula, but they do not appear as premodifiers of nouns.
The pronominal forms are considered standard, except for two frequent adjectives that
do not have them: _<b>třeba</b>, <b>rád</b>._

#### Examples

* _<b>možno</b>_ “possible”, _<b>schopen</b>_ “able”, _<b>nutno</b>_ “necessary”, _<b>znám</b>_ “known”,
  _<b>spokojen</b>_ “satisfied”, _<b>povinen</b>_ “supposed to”, _<b>ochoten</b>_ “willing”,
  _<b>jist</b>_ “sure”, _<b>vědom</b>_ “knowing”, _<b>přítomen</b>_ “present”, _<b>roven</b>_ “equal”,
  _<b>patrno</b>_ “apparent”, _<b>hotov</b>_ “finished”, _<b>spjat</b>_ “connected”, _<b>vinen</b>_ “guilty”
* Long equivalents: _možné, schopný, nutné, známý, spokojený, povinný, ochotný, jistý, vědomý, přítomný, rovný, patrné, hotový, spjatý, vinný_

Some personal pronouns in dative and accusative [Case]() have double forms.
The normal (long) form is more independent in terms of positions it can take in word order.
The short forms are clitics (<a href="http://cs.wikipedia.org/wiki/P%C5%99%C3%ADklonka">http://cs.wikipedia.org/wiki/P%C5%99%C3%ADklonka</a>).
They are separate words (unlike in some other languages) but in the word order they usually stick to the second position.

* _<b>mi</b>, <b>mě</b>, <b>ti</b>, <b>tě</b>, <b>mu</b>, <b>ho</b>, <b>si</b>, <b>se</b>_
* _mně, mne, tobě, tebe, jemu, jeho, sobě, sebe_
* “me, me, you, you, him, him, oneself, oneself”

### <a name="Uncontr">`Uncontr`</a>: uncontracted form of adjectives

#### Examples

* _<b>бідная</b>_ (instead of _бідна_) “poor”

<!-- Interlanguage links updated Čt lis 12 09:43:07 CET 2020 -->
