---
layout: base
title:  'Statistics of aux in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `aux`

This relation is universal.

1182 nodes (1%) are attached to their parents as `aux`.

1182 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24788494077834.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-AUX.html">AUX</a></tt> (1159; 98% instances), <tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_gsd-pos-AUX.html">AUX</a></tt> (21; 2% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	Apa	apa	PRON	W--	PronType=Int	0	root	_	Morf=^apa<w>_W--$
2	kah	kah	PART	T--	_	1	advmod:emph	_	Morf=^kah<t>_T--$
3	yang	yang	PRON	S--	PronType=Rel	5	nsubj:pass	_	Morf=^yang<s>_S--$
4	akan	akan	AUX	M--	_	5	aux	_	Morf=^akan<m>_M--$
5	terjadi	terjadi	VERB	VSP	Mood=Ind|Voice=Pass	1	acl:relcl	_	Morf=^terjadi<v>_VSP$
6	selanjutnya	selanjutnya	ADJ	D--	_	5	amod	_	SpaceAfter=No|Morf=^selanjutnya<d>_D--$
7	?	?	PUNCT	Z--	_	1	punct	_	Morf=^?<z>_Z--$

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Atau	atau	CCONJ	H--	_	5	cc	_	Morf=^atau<h>_H--$
2	malah	malah	ADV	D--	_	5	advmod	_	Morf=^malah<d>_D--$
3	akan	akan	AUX	M--	_	5	aux	_	Morf=^akan<m>_M--$
4	makin	makin	ADV	D--	_	5	advmod	_	Morf=^makin<d>_D--$
5	dekat	dekat	ADJ	ASP	_	0	root	_	Morf=^dekat<a>_ASP$
6	dengan	dengan	ADP	R--	_	7	case	_	Morf=^dengan<r>_R--$
7	Juno	juno	PROPN	X--	_	5	nmod	_	SpaceAfter=No|Morf=^juno<x>_X--$
8	?	?	PUNCT	Z--	_	5	punct	_	Morf=^?<z>_Z--$

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 aux	color:blue
1	Keanehan	aneh	NOUN	NSD	Number=Sing	5	nsubj:pass	_	Morf=^ke+aneh<a>+an_NSD$
2	itu	itu	DET	B--	PronType=Dem	1	det	_	Morf=^itu<b>_B--$
3	pada	pada	ADP	R--	_	4	case	_	Morf=^pada<r>_R--$
4	akhirnya	akhirnya	NOUN	B--	_	5	obl	_	Morf=^akhirnya<b>_B--$
5	dipandang	pandang	VERB	VSP	Mood=Ind|Voice=Pass	0	root	_	Morf=^di+pandang<v>_VSP$
6	sebagai	sebagai	ADP	R--	_	8	case	_	Morf=^sebagai<r>_R--$
7	sebuah	buah	DET	B--	Definite=Ind|PronType=Art	8	det	_	Morf=^sebuah<b>_B--$
8	isyarat	isyarat	NOUN	NSD	Number=Sing	5	obl	_	Morf=^isyarat<n>_NSD$
9	gaib	gaib	ADJ	ASP	_	8	amod	_	Morf=^gaib<a>_ASP$
10	bahwa	bahwa	SCONJ	S--	_	16	mark	_	Morf=^bahwa<s>_S--$
11	lokasi	lokasi	NOUN	NSD	Number=Sing	16	nsubj	_	Morf=^lokasi<n>_NSD$
12	masjid	masjid	NOUN	NSD	Number=Sing	11	compound	_	Morf=^masjid<n>_NSD$
13	harus	harus	AUX	M--	_	16	aux	_	Morf=^harus<m>_M--$
14	lah	lah	PART	T--	_	16	advmod:emph	_	Morf=^lah<t>_T--$
15	di	di	ADP	R--	_	16	case	_	Morf=^di<r>_R--$
16	tempat	tempat	NOUN	NSD	Number=Sing	8	acl	_	Morf=^tempat<n>_NSD$
17	tiang-tiang	tiang	NOUN	NSD	Number=Plur	19	nsubj	_	Morf=^tiang<n>_NSD$
18	itu	itu	DET	B--	PronType=Dem	16	det	_	Morf=^itu<b>_B--$
19	berada	ada	VERB	VSA	Mood=Ind|Voice=Act	16	acl:relcl	_	Morf=^ber+ada<a>_VSA$
20	sekarang	sekarang	ADV	D--	_	19	advmod	_	SpaceAfter=No|Morf=^sekarang<d>_D--$
21	.	.	PUNCT	Z--	_	5	punct	_	Morf=^.<z>_Z--$

~~~


