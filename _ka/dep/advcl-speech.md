---
layout: relation
title: 'advcl:speech'
shortdef: 'direct speech as non-core constituent'
udver: '2'
---

The `ccomp:speech` (direct speech clausal complement) is used for complement sentences that are marked with one of the direct speech enclitics.

~~~ conllu
# text = – გავიგე! – შევუღრინე მეც.
# text-transcription = – gavige! – ševuġrine mec.
# translation = I have understood!, I too snarled at him.
1 –                  – PUNCT     _ _         5  punct   _       LMSeg:–
2 გავიგე             გაგება      VERB        _  Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Past|VerbForm=Fin 5       advcl:speech    _       LMSeg:გა·გებ[ა]/გ|SpaceAfter=No
3 !                  !           PUNCT       _  _                                                                               2       punct           _       LMSeg:!
4 –                  –           PUNCT       _  _                                                                               5       punct           _       LMSeg:–
5 შევუღრინე          შეღრენა     VERB        _  Mood=Ind|Number[subj]=Sing|Person[io]=3|Person[subj]=1|Tense=Past|VerbForm=Fin  0       root            _       LMSeg:შე·ღრენ[ა]/ღრინ
6 მეც                მე          PRON        _  Case=Erg|Encl=C|Number=Sing|PronType=Prs                                        5       nsubj           _       LMSeg:მე|SpaceAfter=No
7 .                  .           PUNCT       _  _                                                                               5       punct           _       LMSeg:.
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:43:17 CEST -->
