---
layout: base
title:  'Statistics of appos in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `appos`

This relation is universal.

12 nodes (0%) are attached to their parents as `appos`.

12 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.41666666666667.

The following 6 pairs of parts of speech are connected with `appos`: <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (4; 33% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (2; 17% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (2; 17% instances), <tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (2; 17% instances), <tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (1; 8% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos	color:blue
1	Twanenibwe	nena	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
2	emida	muda	NOUN	_	NounClass=Bantu4|Referent=Yes	1	obl:agent	1:obl:agent	_
3	enjunzai	bijunzai	NOUN	_	NounClass=Bantu10|Referent=Yes	2	appos	2:appos	SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos	color:blue
1	Kanu	ni	PRON	_	Deixis=Prox|NounClass=Bantu12|Person=3|PronType=Dem	2	det	2:det	Gloss=12.PROX|MSeg=kanu
2	akabina	kabina	NOUN	_	NounClass=Bantu12|Referent=Yes	8	nsubj	8:nsubj	Gloss=AUG-12.buttocks|MSeg=a-kabina
3	kanu	ni	PRON	_	Deixis=Prox|NounClass=Bantu12|Person=3|PronType=Dem	2	appos	2:appos|5:obj	Gloss=12.PROX|MSeg=kanu
4	k'	e	PRON	_	NounClass=Bantu12|PronType=Rel	5	obj	3:ref	Gloss=12.REL|MSeg=ke
5	okubona	bona	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	acl:relcl	3:acl:relcl	Gloss=2sgS-PROG-see-FV|MSeg=o-ku-bon-a
6	,	,	PUNCT	_	_	2	punct	2:punct	SpacesAfter=\n
7	niko	ni	AUX	COP	InfStruct=Foc|NounClass=Bantu12|Person=3|Tense=Pres	8	cop	8:cop	Gloss=COP-12|MSeg=ni-ko
8	kaabyayire	byala	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu12|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	Gloss=12S-PST-give_birth:PFV|MSeg=ka-a-byayire
9	kiki	kiki	PRON	_	PronType=Int	8	obj	8:obj	Gloss=what|MSeg=kiki|SpaceAfter=No
10	?	?	PUNCT	_	_	8	punct	8:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 appos	color:blue
1	Eizweri	izweri	ADV	_	Referent=Yes	4	advmod	4:advmod	Gloss=AUG-recently|MSeg=e-izweri
2	pulezidenti	pulezidenti	NOUN	_	NounClass=Bantu1	4	nsubj	4:nsubj	Gloss=1.president|MSeg=pulezidenti
3	yaali	li	AUX	_	NounClass=Bantu1|Person=3|Tense=Past	4	aux	4:aux	Gloss=1S-PST-AUX|MSeg=a-a-li
4	abbaire	bba	VERB	COP	Aspect=Perf|Mood=Ind|NounClass=Bantu1|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=1S-COP-PFV|MSeg=a-bba-ire
5	eni	eni	ADV	_	Deixis=Prox|NounClass=Bantu23|PronType=Dem	4	advmod:loc	4:advmod:loc	Gloss=23.PROX|MSeg=eni
6	ewaiswe	aiswe	PRON	ASSOC	NounClass=Bantu16|Number=Plur|Person[psed]=3|Person[psor]=1|Poss=Yes|PronType=Prs|Referent=Yes	4	obl	4:obl	Gloss=AUG-16-1plPOSS|MSeg=e-wa-aiswe
7	owa	a	PART	GEN	NounClass=Bantu1|Referent=Yes	8	case	8:case	Gloss=AUG-1.GEN|MSeg=o-wa
8	Uganda	Uganda	PROPN	_	NounClass=Bantu1	2	nmod	2:nmod	Gloss=1.Uganda|MSeg=Uganda
9	Yoweri	Yoweri	PROPN	_	NounClass=Bantu1	2	appos	2:appos	Gloss=1.Yoweri|MSeg=Yoweri
10	Museveni	Museveni	PROPN	_	NounClass=Bantu1	9	flat:name	9:flat:name	Gloss=1.Museveni|MSeg=Museveni|SpaceAfter=No
11	,	,	PUNCT	_	_	4	punct	4:punct	SpacesAfter=\n

~~~


