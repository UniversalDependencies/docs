---
layout: feature
title: 'Mood'
shortdef: 'mood'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Ind">Ind</a></td>
  <td><a href="#Imp">Imp</a></td>
  <td><a href="#Sub">Sub</a></td>
  <td><a href="#Cnd">Cnd</a></td>
</tr>
</table>

Mood is a verbal feature that expresses modality and subclassifies finite verb forms.
Pashto has person-specific sets of forms for three basic moods: indicative, imperative and subjunctive.
There is also an invariable conditional form, marked `Mood=Cnd`, used to express conditional or potential mood.
The `Mood` feature occurs with verbs ([VERB]() and [AUX]()).

Pashto implements various strategies to express the modal meaning similar to the English modal verbs:
* modal verb followed by subjunctive of the content verb
* modal particle followed by subjunctive of the content verb
* compound verb forms including subjunctive or conditional of the content verb

For overview of verb stems and verb endings mentioned below see [Pashto verbal system](../verbal-system.html).


### <a name="Ind">`Ind`</a>: indicative
The indicative can be considered the default, neutral mood.
A verb in the indicative merely states that something happens, has happened or will
happen, without adding any attitude of the speaker.
The indicative is the only finite form distinguishing the [Tense]() (see there for endings overview).

#### Simple uses and formation
The indicative mood includes three sets of simple finite forms for these tenses and aspects:
* present imperfective: present imperfective stem + present endings
* past imperfective: past imperfective stem + past endings
* past perfective: past perfective stem + past endings7

The analogically formed present perfective forms are used for the subjunctive,
as the punctual events cannot happen at the present point.

#### Compound uses
* future imperfective: auxiliary word بۀ‎ _bë_ (with [aux:fut](../dep/aux-fut.html) relation) + present imperfective
* past habitual: auxiliary word بۀ‎ _bë_ (with [aux:hab](../dep/aux-hab.html) relation) + past imperfective (see also [Aspect]() for details).

#### Examples
* present imperfective: لیک **لرلم** _lik **lwalë́m**_ “I am reading the letter”
* past imperfective: کور ته **راتلو** _kor ta **râtlú**_ “we were coming home”
* past perfective: ما کتاب **ونه لیکۀ‎** _mâ kitấb **wë́likë**_ “I did write the book”
* future imperfective: دا کتاب بۀ **لولم** _dâ kitấb bë likë́m_ “I will read this book” or “I will be reading this book”
* past habitual:


### <a name="Imp">`Imp`</a>: imperative
The imperative mood is to used express orders or requests for the second person.
Pashto verbs have imperative forms for both numbers, although the plural form is always identical with its indicative counterpart.
The affirmative imperative distinguishes both aspects, while negative imperative is used only in the imperfective aspect.
Unlike for all other verb forms, the negative particle for the imperative is مه _má_ (see also [Polarity]()).

#### Formation
* imperfective imperative: present imperfective stem + imperative endings
* perfective imperative: present perfective stem + imperative endings
The imperative endings are:
* second person singular: ه- _-a_
* second person plural: ئ- _-ëy_ (identical with the corresponding present indicative ending)

#### Examples
* singluar, perfective, affirmative: لیک **ولرله** _lik **wë́lwala**_ “read the letter”
* plural, imperfective, negative: دا کتاب **مه لیکئ‎** _dâ kitấb má **likëy**_ “do not write that book”


### <a name="Sub">`Sub`</a>: subjunctive
The subjunctive mood does not distinguish tense and aspect.

#### Simple uses
* purpose in subordinate purpose sentences
* orders, requests, wishes or judgements (often with the particle دې _de_ “let, should”)
    * the orders and requests are used only for the first and the third person, as the imperative is used for the second person
* will (after the verb غوښتل _ġux̌të́l_ “to want to”)
* necessity or obligation (after particles like باید _bâyád_ “must, have to, should, necessary”
* present habitual (this holds only for the present subjunctive form for the third person وي _wi_ of the verb ول _wël_ “to be”)

#### Formation
Its forms are formally present perfective, which do not have any other use on their own:
* subjunctive: present perfective stem + present endings

#### Compound uses
Apart from the basic meanings, the subjunctive is used in several compound verb forms:
* future perfective: auxiliary word بۀ‎ _bë_ (with [aux:fut](../dep/aux-fut.html) relation) + subjunctive
* potential (longer forms, see below): shorter potential forms of کول _kawë́l_ “to do” (with [aux:pot](../dep/aux-pot.html) relation) + subjunctive of the content verb

#### Examples
* purpose:
* order:
* wish:
* will:
* necessity:
* present habitual:
* future perfective: به دا کتاب **ولولم** _bë dâ kitấb **wë́likëm**_ “I will read this book” or “I will have read this book”
* potential: کولای شم **ولیکم** _kawë́lây šëm **wë́likëm**_ “I can/may write”, “I am able/allowed to write” or “I know how to write”


### <a name="Cnd">`Cnd`</a>: conditional
The conditional form is invariable for all persons and both numbers, but distinguishes the aspect.
It is used on its own or in compound forms to express the conditional mood
or in compound forms to express the potential mood.

#### Formation
* imperfective conditional: past imperfective stem + ending لای- _-ë́lây_
* perfective conditional: past perfective stem + ending لای- _-ëlây_

#### Simple conditional use
The conditional form is used to express irreal conditions and their consequences.
In this case it is used without the auxiliary verb in personal forms,
thus missing any personal information and probably requiring the use of a personal pronoun.
The bare conditional form is used in this way inly for transitive verbs.

#### Compound conditional uses
* intransitive verbs: conditional of the content verb + conditional وای _wây_ of the verb ول _wël_ “to be”
* irreal consequence in the main sentence: auxiliary word بۀ‎ _bë_ + conditional

The words وای _wây_ and  بۀ‎ _bë_ both with [aux:cnd](../dep/aux-pot.html) relation.

#### Compound potential use
* shorter forms (auxiliary verb کېدل _kedë́l_ “to become”)
  * present potential: conditional of the content verb + subjunctive of the auxiliary verb
  * future potential: conditional of the content verb + future perfective the auxiliary verb
  * past potential: conditional of the content verb + conditional of the auxiliary verb
* longer forms: shorter potential forms of کول _kawë́l_ “to do” + subjunctive of the content verb

The auxiliaries کېدل _kedë́l_ and کول _kawë́l_ both with [aux:pot](../dep/aux-pot.html) relation.

To combine both uses, the conditional and the potential, the perfective conditional form شوای _šwây_ of the auxiliary verb کېدل _kedë́l_ “to become”
is added to the conditional form (for transitive verbs) or it replaces the auxliary وای _wây_ (for intransitive verbs).

#### Examples
* conditional, intransitive:
* conditional, transitive:
* potential, present, short: **لیکلای** شم _**likë́lây** šëm_ “I can/may write”, “I am able/allowed to write” or “I know how to write”
* potential, present, long: **کولای** شم ولیکم _**kawë́lây** šëm wë́likëm_ “I can/may write”, “I am able/allowed to write” or “I know how to write”
* potential, future, short: **لیکلای** ببۀ شم _**likë́lây** bë šëm_ “I will be able/allowed to write” or “I will know how to write”
* potential, past, long: **کولای شوای** ولیکم _**kawë́lây šwây** wë́likëm_ “I could/might write”, “I was able/allowed to write” or “I knew how to write”
* potential conditional, intransitive: 
* potential conditional, transitive:

<!-- Interlanguage links updated So 10. května 2025, 18:14:15 CEST -->
