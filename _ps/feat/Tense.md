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
in relation to the current moment or to another action in the utterance.
The `Tense` feature occurs with verbs ([VERB]() and [AUX]()).

Verbs in Pashto have simple forms for the present and past tenses.
There is also a compound future tense and perfect tenses, that are described below.


### <a name="Pres">`Pres`</a>: present

The present tense denotes actions that are happening in the present moment
or happen repeatedly in the period spanning through the present moment.

The present forms are imperfective and they are marked with `Aspect=Imp` feature,
although there are is no present perfective,
since there cannot be a punctual action happening in the present moment.
The present perfective forms are used for the subjunctive mood,
which does not have any `Tense` nor `Aspect` feature marked.

#### Formation
* present imperfective stem + present endings

#### Compound use
* future imperfective: auxiliary word بۀ‎ _bë_ (with [aux:fut](../dep/aux-fut.html) relation) + present

#### Examples
* present imperfective: کتاب **لرلم** _kitấb **lwalë́m**_ “I am reading a book”
<!-- * present perfective (=subjunctive): کتاب **ولرلم** _kitấb **wë́lwalëm**_ “so that I read a book / I would read a book” -->


### <a name="Past">`Past`</a>: past

The past tense denotes actions that happened (once or repeatedly)
or were happening in the past. It has simple forms for both aspects.
The transitive verbs in the past tense agree with their objects instead
of the subjects.

#### Simple uses and formation
* imperfective: past imperfective stem + past endings
* perfective: past perfective stem + past endings
The `Tense=Past` feature is also used for past participles:
* participle: past imperfective stem + ending لی- _-ë́lay_

#### Compound uses
* habitual: auxiliary word بۀ‎ _bë_ (with [aux:hab](../dep/aux-hab.html) relation) + past imperfective (see also [Aspect]() for details).
* perfect tenses: participle + forms of ول _wël_ “to be” (with [aux:perf](../dep/aux-perf.html) relation, see below)

#### Examples

* past imperfective: ما پرون کتاب **لوستۀ** _mâ parún kitấb **lwëstë́**_ “I was reading a book yesterday”
* past perfective: ما پرون کتاب **ولوستۀ** _mâ parún kitấb **wë́lwëstë**_ “I read a book yesterday”


<h3>Future</h3>

The future tense denotes actions that will happen (once or repeatedly) or will be happening in the future.
It has only compound forms and distinguishes both aspects.

#### Formation
* imperfective: auxiliary word بۀ‎ _bë_ (with [aux:fut](../dep/aux-fut.html) relation) + present imperfective
* perfective: auxiliary word بۀ‎ _bë_ (with [aux:fut](../dep/aux-fut.html) relation) + subjunctive

#### Examples

* future imperfective: صبا **بۀ** کتاب **لرلم** _sabấ **bë** kitấb **lwalë́m**_ “I will be reading a book tomorrow”
* future perfective: صبا **بۀ** کتاب **ولرلم** _sabấ **bë** kitấb **wë́lwalëm**_ “I will read a book tomorrow”

<h3>Perfect tenses</h3>

In Pashto, there are also compound forms of perfect tenses: present perfect, past perfect and future perfect.
They describe an event preceding (i.e, that has / had / will have happened before) another event,
which is expressed by a usual tense.
The term "perfect" here should not be confused with the perfective aspect
which means a punctual event in past or future, not precedence like the perfect tenses.

#### Formation and use
The perfect tenses use indicative forms of the auxiliary verb ول _wël_ “to be” (with [aux:perf](../dep/aux-perf.html) relation),
which do not distinguish the aspect:
* present: past participle of the content verb + present of the auxiliary verb
* past: past participle of the content verb + past of the auxiliary verb
* future: past participle of the content verb + future of the auxiliary verb

The auxiliary verb in the present perfect may be omitted, if the subject is known.
A phenomenom called "split ergativity" occurs in all perfect tenses for transitive verbs:
both participle and the auxiliary verb agree with the object, instead of the subject.

#### Examples
* present perfect, intransitive, omitted auxiliary: پلار کور ته **تللی** _plâr kor ta **tlë́lay**_ “The father has gone home”
* past perfect, transitive: ما نجلۍ **لیدلې وه** _mâ nǰë́lëy **lidë́le wa**_ “I had seen the girl”
* future perfect, intransitive: دلته **به راغلی وي** _dë́lta **bë râġë́lay wi**_ “He will have come here”

<!-- Interlanguage links updated So 10. května 2025, 18:14:37 CEST -->
