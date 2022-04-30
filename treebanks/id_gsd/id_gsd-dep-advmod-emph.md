---
layout: base
title:  'Statistics of advmod:emph in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="id_gsd-dep-advmod.html">advmod</a></tt>.

440 nodes (0%) are attached to their parents as `advmod:emph`.

369 instances of `advmod:emph` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.28409090909091.

The following 13 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="id_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="id_gsd-pos-PART.html">PART</a></tt> (133; 30% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-PART.html">PART</a></tt> (97; 22% instances), <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="id_gsd-pos-PART.html">PART</a></tt> (80; 18% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-PART.html">PART</a></tt> (33; 8% instances), <tt><a href="id_gsd-pos-PART.html">PART</a></tt>-<tt><a href="id_gsd-pos-PART.html">PART</a></tt> (27; 6% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-PART.html">PART</a></tt> (24; 5% instances), <tt><a href="id_gsd-pos-DET.html">DET</a></tt>-<tt><a href="id_gsd-pos-PART.html">PART</a></tt> (16; 4% instances), <tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_gsd-pos-PART.html">PART</a></tt> (10; 2% instances), <tt><a href="id_gsd-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="id_gsd-pos-PART.html">PART</a></tt> (9; 2% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="id_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="id_gsd-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="id_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod:emph	color:blue
1	Bau	bau	NOUN	NSD	Number=Sing	0	root	_	MorphInd=^bau<n>_NSD$
2	apa	apa	ADV	W--	PronType=Int	1	advmod	_	MorphInd=^apa<w>_W--$
3	kah	kah	PART	T--	_	2	advmod:emph	_	MorphInd=^kah<t>_T--$
4	yang	yang	PRON	S--	PronType=Rel	5	nsubj:pass	_	MorphInd=^yang<s>_S--$
5	tercium	cium	VERB	VSP	Mood=Ind|Voice=Pass	1	acl:relcl	_	MorphInd=^ter+cium<v>_VSP$
6	oleh	oleh	ADP	R--	_	7	case	_	MorphInd=^oleh<r>_R--$
7	ku	aku	PRON	PS1	Number=Sing|Person=1|Polite=Infm|PronType=Prs	5	obl	_	MorphInd=^aku<p>_PS1$
8	?	?	PUNCT	Z--	_	1	punct	_	MorphInd=^?<z>_Z--$

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:emph	color:blue
1	Berpaling	paling	VERB	VSA	Mood=Ind|Voice=Act	0	root	_	MorphInd=^ber+paling<v>_VSA$
2	kah	kah	PART	T--	_	1	advmod:emph	_	MorphInd=^kah<t>_T--$
3	engkau	engkau	PRON	PS2	Number=Sing|Person=2|Polite=Infm|PronType=Prs	1	nsubj	_	MorphInd=^engkau<p>_PS2$
4	dari	dari	ADP	R--	_	5	case	_	MorphInd=^dari<r>_R--$
5	kepercayaan	percaya	NOUN	NSD	Number=Sing	1	obl	_	MorphInd=^ke+percaya<v>+an_NSD$
6	dan	dan	CCONJ	H--	_	7	cc	_	MorphInd=^dan<h>_H--$
7	persembahan	sembah	NOUN	NSD	Number=Sing	5	conj	_	MorphInd=^per+sembah<v>+an_NSD$
8	ku	aku	PRON	PS1	Number=Sing|Person=1|Polite=Infm|PronType=Prs	7	nmod:poss	_	MorphInd=^aku<p>_PS1$
9	?	?	PUNCT	Z--	_	1	punct	_	MorphInd=^?<z>_Z--$

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:emph	color:blue
1	Apa	apa	PRON	W--	PronType=Int	0	root	_	MorphInd=^apa<w>_W--$
2	kah	kah	PART	T--	_	1	advmod:emph	_	MorphInd=^kah<t>_T--$
3	yang	yang	PRON	S--	PronType=Rel	5	nsubj:pass	_	MorphInd=^yang<s>_S--$
4	akan	akan	AUX	M--	_	5	aux	_	MorphInd=^akan<m>_M--$
5	terjadi	terjadi	VERB	VSP	Mood=Ind|Voice=Pass	1	acl:relcl	_	MorphInd=^terjadi<v>_VSP$
6	selanjutnya	selanjutnya	ADJ	D--	_	5	amod	_	SpaceAfter=No|MorphInd=^selanjutnya<d>_D--$
7	?	?	PUNCT	Z--	_	1	punct	_	MorphInd=^?<z>_Z--$

~~~


