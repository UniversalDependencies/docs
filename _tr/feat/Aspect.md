---
layout: feature
title: 'Aspect'
shortdef: 'aspect'
udver: '2'
---

Aspect is a feature that specifies duration of the action in time, whether the action has been completed, ongoing etc.

In Turkish a set of verbal morphemes alter the `Aspect` feature of a verb.
These morphemes often affect the [Tense]() and [Mood]() features as well.
The mapping between the suffixes and the `Aspect` values may sometimes be non-trivial.

The following describes the values used for `Aspect` together with the
suffixes typically introduce the defined `Aspect` value.
See [tr-overview/special-syntax]() for the discussion of mapping
relevant verbal suffixes to `Tense`, `Aspect` and `Mood` values.


### <a name="Imp">`Imp`</a>: imperfect aspect

The action took / takes / will take some time span and there is no
information whether and when it was / will be completed.

#### Examples

* _yere gitmeyeceğim_ “I won't go anywhere”

### <a name="Perf">`Perf`</a>: perfect aspect

The action has been / will have been completed.

#### Examples

* *eve gitti* 'she went home'
* *eve gitmiş* 'she apparently went home'
* *eve gidecek* 'she will go home'
* *eve gitmişti* 'she had gone home (when I arrived)'

### <a name="Prog">`Prog`</a>: progressive aspect

Action is in progress with respect to current or a reference time.

Turkish has two progressive markers, *-(I)yor* and *-mAktA*.
Latter is used in more formal cases than former.
Otherwise there is no clear distinction between the two.
In some contexts, both suffixes may also indicate _habitual_ aspect (`Aspect=Hab` described below).

#### Examples

* *eve gidiyor* 'she is going home (now)'
* *eve gitmekte* 'she is going home (now)'
* *eve gidiyordu* 'she was going home (when I saw her)'
* *eve gimekteydi* 'she was going home (when I saw her)'

### <a name="Hab">`Hab`</a>: habitual aspect (**new proposal**)

Verbal morphology in Turkish may indicate an action that happens repeatedly at present or past.
This aspect is mainly marked with suffix *-A/Ir*.
In some cases, the progressive suffix *-(I)yor* may indicate the habitual aspect,
_Her sabah 5 km koşuyorum_ "I ran 5 km every morning".
See Göksel and Kerslake (2005, pp289--290) for details.

#### Examples

* *çok kitap okur* 'she reads lots of books'
* *sigara içerdi* 'she used to smoke'

### <a name="Rapid">`Rapid`</a>: rapid sudden action (**new proposal**)

A particular verb form formed by suffix *-Iver* refers to actions that are sudden or performed rapidly.
Kornfilt (1995, p.361) calls this rapid or sudden aspect.

#### Examples

* *eve gidiver* 'quickly go home!'
* *eve gidiverdi* 'she immediately/suddenly went home!'


### <a name="Dur">`Dur`</a>: durative aspect (**new proposal**)

A situation or action that has persisted over a period of time and still continues. This is called durative action (e.g., Kornfilt 1995, p.362).
The suffixes *-Akal*, *-Agel* and *-Adur* indicate this aspect (the first one might better be defined as 'durative stative' and others 'durative progressive').

#### Examples

* *bakakaldı* 'she looked (for a while, she was frozen while looking)'
* *yapagelmiştir* 'she have gone on doing (something)'
* *okuyadur* 'go on reading'

### <a name="Prosp">`Prosp`</a>: prospective aspect

The action is/was about to happen.

In Turkish, combination of feature tense marker _-AcAk_ and the past tense marker _-DI_ signal an event that was about to happen.
Another (rather rare) means of expressing prospective aspect is with the suffix *-Ayaz*.
This form is used only in a few fixed expressions,
and it only combines with the past tense forms.

#### Examples

* *düşecekti* 'she was about to fall'
* *düşeyazdı* 'she was about to fall'

### References
- Aslı Göksel and Celia Kerslake. _Turkish: A Comprehensive Grammar_.  London: Routledge, 2005.
- Jaklin Kornfilt. _Turkish_. London and New York: Routledge, 1997.
<!-- Interlanguage links updated St lis 3 20:58:17 CET 2021 -->
