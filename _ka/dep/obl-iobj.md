---
layout: relation
title: 'obl:iobj'
shortdef: 'obl functioning as demoted iobj in perfect tense'
udver: '2'
---

The `obl:iobj` relation marks an indirect object that is demoted to an oblique in the perfect tense series and marked by the postposition -თვის.

~~~ conllu
# text = შენთვის არ მომიპარავს ფული.
# text-transcription = šentvis ar momiṗaravs puli.
# translation = I didn’t steal the money from you.
1	შენ	შენ	PRON	_	Number=Sing|PronType=Prs	4	obl:iobj	_	LMSeg:შენ|SpaceAfter=No
2	თვის	_თვის	ADP	_	_	1	case	_	LMSeg:_თვის
3	არ	არ	ADV	_	_	4	advmod	_	LMSeg:არ
4	მომიპარავს	მოპარვა	VERB	_	Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=PastPerf	0	root	_	LMSeg:მო·პარვ[ა]/პარ
5	ფული	ფული	NOUN	_	Case=Nom|Number=Sing	4	obj	_	LMSeg:ფულ·ი|SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	LMSeg:.

Compare with the corresponding sentence in the Aorist (without negation):

# text = შენ მოგპარე ფული.
# text-transcription = šen mogṗare puli.
# translation = I stole the money from you.
1	შენ	შენ	PRON	_	Number=Sing|PronType=Prs	2	iobj	_	LMSeg:შენ
2	მოგპარე	მოპარვა	VERB	_	Number[io]=Sing|Number[subj]=Sing|Person[io]=2|Person[obj]=3|Person[subj]=1|Tense=Past	0	root	_	LMSeg:მო·პარვ[ა]/პარ
3	ფული	ფული	NOUN	_	Case=Nom|Number=Sing	2	obj	_	LMSeg:ფულ·ი|SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	LMSeg:.

~~~
<!-- Interlanguage links updated So 10. května 2025, 18:16:00 CEST -->
