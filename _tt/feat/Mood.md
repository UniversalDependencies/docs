---
layout: feature
title: 'Mood'
shortdef: 'mood'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Cnd">Cnd</a></td>
  <td><a href="#Des">Des</a></td>
  <td><a href="#Imp">Imp</a></td>
  <td><a href="#Ind">Ind</a></td>
  <td><a href="#Irr">Irr</a></td>
  <td><a href="#Nec">Nec</a></td>
  <td><a href="#Opt">Opt</a></td>
  <td><a href="#Prs">Prs</a></td>
</tr>
</table>

`Mood` expresses the modality, a speaker's perspective, in finite verbs.
Turkish verbs may carry a wide range of mood information.
Different moods are indicated by a number of suffixes, which also interact with [tense](Tense) and [aspect](Aspect) of the verb.

### <a name="Ind">`Ind`</a>: indicative

The indicative can be considered the default mood. A verb in indicative merely states that something happens, has happened or will happen, without adding any attitude of the speaker.
In Tatar, this feature is contrastive with `Mood=Irr` and `Mood=Nec` in the future tense participles (`VerbForm=Part`);
for this reason, this feature is only explicitly shown in the verbs in future tense participle forms.

#### Examples

* *Өйгә кайт<b>ачак</b>мын* "I will go home" (cf. *Өйгә кайт<b>ыр</b>мын* "I will probably go home")


### <a name="Imp">`Imp`</a>: imperative

In Tatar imperatives are expressed by lack of any tense/aspect/modality marker. The form of imperative may indicate second or third person plural/singular. Note that forms other than the second person singular may indicate a wish rather than a command, so may be marked as `Opt` (see below).

#### Examples

* *кил!* 'Come!'
* *килегез!* '(you pl.) come!'
* *килсен!* '(I am ordering him/her to) come!'

### <a name="Prs">`Prs`</a>: persuasive (**new, not in UD**)

Tatar has a particular form of imperative that is not a coercive order but a request.

#### Examples

* *Утырыгыз<b>чы</b>* "Have a seat, please."
* *Зинһар, миңа булыш<b>сана</b>* "Please help me.

### <a name="Opt">`Opt`</a>: optative

Optative suffix (*-ый/-и*) in Tatar typically combines with a first person suffix and expresses a suggestion.

#### Examples

* *барыйм* "I shall go"
* *барыйк* "Let's go"

### <a name="Cnd">`Cnd`</a>: conditional

This expresses conditionality.
It is the primary means of forming conditionals in Tatar ('if ...').
The suffix responsible for this mood is *-са/сә*.

#### Examples

* *Өйгә кайт<b>са</b>м* 'if I go home'

### <a name="Nec">`Nec`</a>: necessitative

This expresses some sort of necessity (must/should/have to in English).
In Tatar, this mood is only morphologically distinctive in a future tense participle form (`VerbForm=Part`),
and is expressed by the verbal suffix *-асы/әсе*, *-ыйсы/исе*.

#### Examples

* *ук<b>ыйсы</b> китап* "the book to read"
* *без яш<b>исе</b> йорт* "the house we are to live in"
* *эшлисе эш юк* "there is no work to be done"
* *өйгә кайт<b>асы</b>м килә* "I want to go home"

### <a name="Irr">`Irr`</a>: irrealis
The irrealis mood denotes an action that is not known to happen or have happened.
In Tatar, this mood is morphologically distinctive in a future tense participle form expressed by the verbal suffix *-ыр/ер* (`VerbForm=Part`) and the suffix *-тыр/-дыр* which is attached to a predicate other than a verb to imply an uncertainty.

#### Examples

* *Сөйлә<b>р</b> сүзем юк* "I have no words to say."
* *көт<b>әр</b>мен* "I will wait (maybe)."
* *китап</b>тыр</b>* "Probably a book."
<!-- Interlanguage links updated St lis 3 20:58:23 CET 2021 -->
