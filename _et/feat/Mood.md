---
layout: feature
title: 'Mood'
shortdef: 'mood'
udver: '2'
---
Definition


Mood is a feature that expresses modality and subclassifies finite verb forms. Its an inflectional verb feature in Estonian, including indicative, conditional, imperative and quotative. According to some authors (e.g Erelt 2003), Estonian also has jussive mood. However, in Estonian UD, these usages are regarded as quotatives.<br/>

### <a name="Ind">`Ind`</a>: indicative

The indicative can be considered the default mood. A verb in
indicative merely states that something happens, has happened or will
happen, without adding any attitude of the speaker.
Indicative mood combines with all persons and tenses and both voices in Estonian.

#### Examples

* _Sa ei <b>tule</b>._ “You are not coming.”

### <a name="Imp">`Imp`</a>: imperative

The imperative expresses the speaker's request, order or prohibition to the listener  or call for a joint action.
In the imperative mood, there is no first person singular form. The first person plural forms belong to the high style.
The second person singular form is unmarked. Some authors separate third person forms as jussive mood (e.g. Erelt 2003).<br/>
Imperative mood combines both with active and passive voice.

#### Examples

* [cs] _<b>Studuj</b> na univerzitě!_ "<b>Study</b> at the university!"
* [de] _<b>Studiere</b> an der Universität!_ "<b>Study</b> at the university!"

### <a name="Cnd">`Cnd`</a>: conditional

The conditional mood is used to express the speaker's opinion that an action or an event would have taken place under some circumstances but it actually did not / do not happen.  Conditional mood is also used to express politeness.<br/>
A verb in conditional mood may inflect for person, but alternatively, non-inflected forms are also widely used.<br/>
Conditional mood combines with two tenses: present and preteritum (compound past) In the latter case, only the auxiliary is tagged using the feature <code>cond</code>.<br/>
Conditional combines with both voices (active and passive) in Estonian.<br/>

#### Examples

* [tr] *eve <b>gittiyse</b>* "if she went home"
* [tr] *eve <b>gidiyorsa</b>* "if she is going home"
* [tr] *eve <b>giderse</b>* "if she goes home"
* [tr] *eve <b>gidecekdiyse</b>* "if she was going to go home"

### <a name="Qot">`Qot`</a>: quotative

The quotative is used when the speaker wants to point out that s/he is not responsible for the accuracy of a statement but acts only as an intermediary or reporter.<br/>
Verb in quotative mood does not inflect for person. Like conditional, it combines with two tenses – present and preteritum (compound past). In the latter case, only the auxiliary is tagged using the feature <code>quot</code>.
Quotative combines with both voices, active and passive.<br/>

#### Examples

* [et] _Sa ei <b>tulevat</b>._ “You are reportedly not coming.”


Erelt 2003 = Estonian language. Edited by Mati Erelt. Linguistica Uralica Supplemenatry series vol 1. Tallinn: Estonian Academy Publishers.
<!-- Interlanguage links updated Pá kvě 14 11:08:33 CEST 2021 -->
