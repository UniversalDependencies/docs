---
layout: feature
title: 'Person'
shortdef: 'person'
---

In Turkish, `Person` is a feature of personal [pronouns](tr-pos/PRON), and [verbs](tr-pos/VERB). `Person` marking on verbs are obligatory in Turkish for all finite verb forms. The `Person` marker on predicates indicate the subject when the subject is omited/dropped from the sentence.


The verbal markers for person and number are composite, and their form change
depending on the other suffixes attached to the verb.

The person/number marker of verbs may also be attached to the question partical *-mI* (*-mi/mı/mu/mü*), which is written separately.

METU-Sabancı treebank marks all nouns as having 3rd person agreement marker.
We do not mark nouns for `Person`.

### `1`: first person

In singular, the first person refers just to the speaker / author. In
plural, it must include the speaker and one or more additional
persons. 

It is used for pronouns *ben* 'I' and *biz* 'we' and thier inflected forms, and verbs with a first person  plural/signular agreement suffix.

#### Examples

* *<b>ben</b>* 'I'
* *<b>ben</b>imle* 'with me'
* *<b>biz</b>imki* 'the one that belongs to us'
* *(ben) okudu<b>m</b>* 'I read-PAST' -- note the optionality of the subject
* *(biz) okuyacağ<b>ız</b>* 'We read-FUT'


### `2`: second person

In singular, the second person refers to the addressee of the
utterance / text. In plural, it may mean several addressees and
optionally some third persons too.

It is used for pronouns *sen* 'you-SING' and *siz* 'you-PLU' and thier inflected forms, and verbs with a second person  plural/signular agreement suffix.

The second person singular agreement suffix is null for verbs in imperative form.

#### Examples

* *<b>sen</b>i* 'you(SG)-ACC'
* *<b>siz</b>inle* 'with you(PL)'
* *<b>siz</b>de* 'you(PL)-LOC - on/at you(PL)'
* *oku!* 'read!'
* *(sen) okudu<b>n</b>* 'you(SG) read-PAST'
* *(siz) okuyacak<b>sınız</b>* 'you(PL) read-FUT'


### `3`: third person

The third person refers to one or more persons that are neither
speakers nor addressees.

It is used for pronouns *o* 'he/she/it' and *onlar* 'they' and thier inflected forms, and verbs with a second third plural/signular agreement suffix. The third person singular agreement suffix is null in most cases. 

#### Examples

* *<b>o</b>na* 'he/she/it-DAT'
* *<b>onlar</b>la* 'with them'
* *(o) okudu* 'he/she read-PAST'
* *(onlar) okudu(<b>lar</b>)* 'they read-PAST' -- note the optionality of the  agreement on the verb
* *okudu<b>lar</b>* 'they read-PAST'
