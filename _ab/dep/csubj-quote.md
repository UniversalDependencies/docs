---
layout: relation
title: 'csubj:quote'
shortdef: 'a direct speech clausal subject complement'
udver: '2'
---

The dependent of an `csubj:quote` is a direct speech clause, cross-referenced by the subject marker of a verb of saying and often introduced by the particle *ҳәа*.

~~~ conllu
# text = Лакоба дыҧсит ҳәа анлаҳа дҵәыуон.
# text-transcription = Laḳoba dəpsiṭ ḥ°a anlaḥa dc̣°əuon.
# translation = When she heard that Lakoba had died she cried.
1 Лакоба             Лакоба   PROPN  _   NameType=Prs   2       nsubj   _       LMSeg:Лакоба
2 дыҧсит             а-ҧсра́   VERB   _   Dyn=Yes|Gender[subj]=Com|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=Fin   4       csubj:quote     _       LMSeg:а-ҧс-ра́
3 ҳәа                ҳәа́      PART   _   _                                                                                              2       mark            _       LMSeg:ҳәа́
4 анлаҳа             аҳара́    VERB   _   Dyn=Yes|Gender[io]=Fem|Number[io]=Sing|Person[io]=3|Person[subj]=3|RelType=Tmp|Subcat=Intr|Tense=Aor|VerbForm=NonFin   5       advcl   _       LMSeg:аҳа-ра́
5 дҵәыуон            а-ҵәу́ара VERB   _   Dyn=Yes|Gender[subj]=Com|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|Tense=Imp|VerbForm=Fin                           0       root    _       LMSeg:а-ҵәу́а-ра|SpaceAfter=No
6 .                  .        PUNCT  _   _                                                                                                                      5       punct   _       LMSeg:.

~~~

<!-- Interlanguage links updated So 10. května 2025, 18:15:21 CEST -->
