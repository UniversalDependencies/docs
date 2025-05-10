---
layout: base
title:  'Statistics of goeswith in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `goeswith`

This relation is universal.

184 nodes (0%) are attached to their parents as `goeswith`.

184 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.42391304347826.

The following 8 pairs of parts of speech are connected with `goeswith`: <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-X.html">X</a></tt> (81; 44% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-X.html">X</a></tt> (42; 23% instances), <tt><a href="id_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="id_gsd-pos-X.html">X</a></tt> (41; 22% instances), <tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_gsd-pos-X.html">X</a></tt> (10; 5% instances), <tt><a href="id_gsd-pos-DET.html">DET</a></tt>-<tt><a href="id_gsd-pos-X.html">X</a></tt> (4; 2% instances), <tt><a href="id_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="id_gsd-pos-X.html">X</a></tt> (3; 2% instances), <tt><a href="id_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="id_gsd-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	Kisah	kisah	NOUN	NSD	Number=Sing	3	nsubj:pass	_	Morf=^kisah<n>_NSD$
2	ini	ini	DET	B--	PronType=Dem	1	det	_	Morf=^ini<b>_B--$
3	di	di	VERB	R--	Typo=Yes	0	root	_	CorrectForm=diakhiri|Morf=^di<r>_R--$
4	akhiri	_	X	VSA	_	3	goeswith	_	Morf=^akhir<n>+i_VSA$
5	dengan	dengan	ADP	R--	_	6	case	_	Morf=^dengan<r>_R--$
6	hilang	hilang	NOUN	ASP	_	3	obl	_	Morf=^hilang<a>_ASP$
7	nya	nya	DET	PS3	Definite=Def|PronType=Art	6	det	_	Morf=^dia<p>_PS3$
8	Superman	superman	PROPN	X--	_	6	nmod	_	SpaceAfter=No|Morf=^superman<x>_X--$
9	?	?	PUNCT	Z--	_	3	punct	_	Morf=^?<z>_Z--$

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 goeswith	color:blue
1	Sebagai	sebagai	ADP	R--	_	2	case	_	Morf=^sebagai<r>_R--$
2	tambahan	tambahan	ADJ	NSD	_	5	xcomp	_	Morf=^tambah<v>+an_NSD$
3	dapat	dapat	AUX	VSA	_	5	aux	_	Morf=^dapat<v>_VSA$
4	pula	pula	ADV	D--	_	5	advmod	_	Morf=^pula<d>_D--$
5	diberi	beri	VERB	VSP	Mood=Ind|Voice=Pass	0	root	_	Morf=^di+beri<v>_VSP$
6	serta	serta	CCONJ	H--	_	7	cc	_	Morf=^serta<h>_H--$
7	kolang	kolang	NOUN	X--	Typo=Yes	5	conj	_	Morf=^kolang<x>_X--$
8	-	_	X	Z--	_	7	goeswith	_	Morf=^-<z>_Z--$
9	kaling	_	X	X--	_	7	goeswith	_	SpaceAfter=No|Morf=^kaling<x>_X--$
10	.	.	PUNCT	Z--	_	5	punct	_	Morf=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 goeswith	color:blue
1	Meskipun	meskipun	SCONJ	S--	_	5	mark	_	Morf=^meskipun<s>_S--$
2	berkali	berkali	ADV	VSA	Typo=Yes	5	advmod	_	Morf=^ber+kali<v>_VSA$
3	-	_	X	Z--	_	2	goeswith	_	Morf=^-<z>_Z--$
4	kali	_	X	NSD	_	2	goeswith	_	Morf=^kali<n>_NSD$
5	diserang	serang	VERB	VSP	Mood=Ind|Voice=Pass	9	advcl	_	Morf=^di+serang<v>_VSP$
6	nya	dia	PRON	PS3	Number=Sing|Person=3|PronType=Prs	5	obl:agent	_	Morf=^dia<p>_PS3$
7	,	,	PUNCT	Z--	_	5	punct	_	Morf=^,<z>_Z--$
8	Kotomi	kotomi	PROPN	X--	_	9	nsubj:pass	_	Morf=^kotomi<x>_X--$
9	ditolong	tolong	VERB	VSP	Mood=Ind|Voice=Pass	0	root	_	Morf=^di+tolong<v>_VSP$
10	oleh	oleh	ADP	R--	_	11	case	_	Morf=^oleh<r>_R--$
11	Dorje	dorje	PROPN	X--	_	9	obl	_	Morf=^dorje<x>_X--$
12	dan	dan	CCONJ	H--	_	13	cc	_	Morf=^dan<h>_H--$
13	Kawasaki	kawasaki	PROPN	F--	_	11	conj	_	SpaceAfter=No|Morf=^kawasaki<f>_F--$
14	.	.	PUNCT	Z--	_	9	punct	_	Morf=^.<z>_Z--$

~~~


