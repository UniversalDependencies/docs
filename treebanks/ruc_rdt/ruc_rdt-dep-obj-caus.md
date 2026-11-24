---
layout: base
title:  'Statistics of obj:caus in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `obj:caus`

This relation is a language-specific subtype of <tt><a href="ruc_rdt-dep-obj.html">obj</a></tt>.
There are also 1 other language-specific subtypes of `obj`: <tt><a href="ruc_rdt-dep-obj-appl.html">obj:appl</a></tt>.

11 nodes (0%) are attached to their parents as `obj:caus`.

9 instances of `obj:caus` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.36363636363636.

The following 3 pairs of parts of speech are connected with `obj:caus`: <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (9; 82% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (1; 9% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obj:caus	color:blue
1	Obinisya	bina	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Cau	0	root	0:root	_
2	omaama	maama	NOUN	_	NounClass=Bantu1|Referent=Yes	1	obj:caus	1:obj:caus	SpaceAfter=No
3	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obj:caus	color:blue
1	Eyo	o	PRON	_	Deixis=Med|NounClass=Bantu9|PronType=Dem	2	nsubj	2:nsubj	Gloss=9.MED|MSeg=eyo
2	nsimoola	simoola	NOUN	_	NounClass=Bantu9	0	root	0:root	Gloss=9.talking|MSeg=n
3	ya	a	PART	GEN	NounClass=Bantu4	4	case	4:case	Gloss=4.GEN|MSeg=ya
4	kugaya	gaya	NOUN	_	NounClass=Bantu15|VerbForm=Vnoun	2	nmod	2:nmod	Gloss=INF-look_down-FV|MSeg=ku-gay-a|SpacesAfter=\n
5	na	na	CCONJ	COM	_	6	cc	6:cc	Gloss=and|MSeg=na
6	kunobesya	noba	NOUN	_	NounClass=Bantu15|VerbForm=Vnoun|Voice=Cau	4	conj	2:nmod|4:conj	Gloss=15S-abandon-CAUS-FV|MSeg=ku-nob-esy-a
7	Banyala	Munyala	PROPN	_	NounClass=Bantu2	6	obj:caus	6:obj:caus	Gloss=2.Banyala|MSeg=Banyala
8	iyanga	iyanga	NOUN	_	NounClass=Bantu5	6	iobj	6:iobj	Gloss=5.iyanga|MSeg=iyanga
9	lyabwe	abwe	PRON	ASSOC	NounClass[psed]=Bantu5|NounClass[psor]=Bantu2|Person[psed]=3|Person[psor]=3|Poss=Yes|PronType=Prs	8	nmod:poss	8:nmod:poss	Gloss=5-2POSS|MSeg=li-abwe|SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	2:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj:caus	color:blue
1	aBaganda	Muganda	PROPN	_	NounClass=Bantu2|Referent=Yes	2	nsubj	2:nsubj	Gloss=AUG-2.Baganda|MSeg=a-Baganda
2	bakoleserye	kolesya	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu2|Person=3|Tense=Pres|VerbForm=Fin|Voice=Cau	0	root	0:root	Gloss=2S-do-CAUS:PFV|MSeg=ba-kol-eserye
3	aBanyala	Munyala	PROPN	_	NounClass=Bantu2|Referent=Yes	2	obj:caus	2:obj:caus	Gloss=AUG-2.Banyala|MSeg=a-Banyala
4	buli	buli	DET	_	PronType=Tot	5	det	5:det	Gloss=every|MSeg=buli
5	kalumu	kalumu	NOUN	_	NounClass=Bantu12	2	iobj	2:iobj	Gloss=12.work|MSeg=kalumu|SpacesAfter=\n

~~~


