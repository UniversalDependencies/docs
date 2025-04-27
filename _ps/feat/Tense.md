---
layout: feature
title: 'Tense'
shortdef: 'tense'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Pres">Pres</a></td>
  <td><a href="#Past">Past</a></td>
</tr>
</table>

Tense is a feature that specifies the time when the action took / takes / will take place,
in relation to the current moment or to another action in the utterance. The `tense` feature occurs with verbs ([VERB]())
and auxiliary verbs ([AUX]()).

Verbs in Pashto have simple forms for the present and past tenses.
There is also a compound future tense and perfect tenses described below.

### <a name="Pres">`Pres`</a>: present

The present tense combined with imperfective aspect `Aspect=Imp`
denotes actions that are happening in the present moment
or happen repeatedly in the period spanning through the present moment.

The present tense combined with perfective aspect `Aspect=Perf`
would have no use, since there cannot be a punctual action happening in the present moment,
but these forms have the meaning of the subjunctive mood. This is not marked, because
the forms are formally indicative and they are used also for the future
perfective tense.

The regular verbs have simple forms for the present tense in boths aspects.
The forms for the third person of both numbers are usually identical.

Overview of the present endings:
<table border="1">
<tr>
  <td/>
  <td align="middle"><b>SG</b></td>
  <td align="middle"><b>PL</b></td>
</tr>
<tr>
  <td align="middle"><b>1</b></td>
  <td align="middle">م ëm</td>
  <td align="middle">و u</td>
</tr>
<tr>
  <td align="middle"><b>2</b></td>
  <td align="middle">ې e</td>
  <td align="middle">ئ ëy</td>
</tr>
<tr>
  <td align="middle"><b>3</b></td>
  <td align="middle" colspan="2">ي i</td>
</tr>
</table>

#### Examples

* present imperfective: کتاب **لرلم** _kitấb **lwalë́m**_ “I am reading a book”
* present perfective (=subjunctive): کتاب **ولرلم** _kitấb **wë́lwalëm**_ “so that I read a book / I would read a book”

### <a name="Past">`Past`</a>: past

The past tense denotes actions that happened (once or repeatedly)
or were happening in the past. It has simple forms for both aspects.
The transitive verbs in the past tense agree with their objects instead
of the subjects. The past verb stem for the past tense may differ from the present stem.
The forms for the third person of both numbers are further distinguished
according to the `Gender`.

Overview of the past endings:
<table border="1">
<tr>
  <td/>
  <td align="middle" colspan="2"><b>SG</b></td>
  <td align="middle" colspan="2"><b>PL</b></td>
</tr>
<tr>
  <td/>
  <td align="middle"><b>M</b></td>
  <td align="middle"><b>F</b></td>
  <td align="middle"><b>M</b></td>
  <td align="middle"><b>F</b></td>
</tr>
<tr>
  <td align="middle"><b>1</b></td>
  <td align="middle" colspan="2">لم ëlëm</td>
  <td align="middle" colspan="2">لو ëlu</td>
</tr>
<tr>
  <td align="middle"><b>2</b></td>
  <td align="middle" colspan="2">لې ële</td>
  <td align="middle" colspan="2">لئ ëlëy</td>
</tr>
<tr>
  <td align="middle"><b>3</b></td>
  <td align="middle">ۀ ë<br/>- -</td>
  <td align="middle">له ëla</td>
  <td align="middle">لۀ ëlë<br/>ل ël</td>
  <td align="middle">لې ële</td>
</tr>
</table>

#### Examples

* past imperfective: ما پرون کتاب **لوستۀ** _mâ parún kitấb **lwëstë́**_ “I was reading a book yesterday”
* past perfective: ما پرون کتاب **ولوستۀ** _mâ parún kitấb **wë́lwëstë**_ “I read a book yesterday”


### future

The Pashto verbs have a compound future tense that consist of an auxiliary word بۀ _bë_
and the present imperfective forms of the verb for the imperfective future
and subjunctive forms for the perfective future.
The auxiliary word has also other uses, so it does not bear the `Tense=Fut` feature.
But it is connected to the main verb with the [aux:fut](../dep/aux-fut.html) relation subtype to indicate the future meaning.


#### Examples

* future imperfective: صبا **بۀ** کتاب **لرلم** _sabấ **bë** kitấb **lwalë́m**_ “I will be reading a book tomorrow”
* future perfective: صبا **بۀ** کتاب **ولرلم** _sabấ **bë** kitấb **wë́lwalëm**_ “I will read a book tomorrow”

### perfect tenses

In Pashto, there are also compound forms of perfect tenses (past perfect, present perfect, future perfect),
which consist of a participle and an auxiliary verb ول _wël_ “to be” in the present, past or future tense.
The auxiliary verb is connected to the participle with the [aux:perf](../dep/aux-perf.html) relation subtype to indicate the perfect meaning.

#### Examples

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:07 CET -->
