---
layout: base
title:  'Statistics of nmod:lmod in UD_Alemannic-DIVITAL'
udver: '2'
---

## Treebank Statistics: UD_Alemannic-DIVITAL: Relations: `nmod:lmod`

This relation is a language-specific subtype of <tt><a href="gsw_divital-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="gsw_divital-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="gsw_divital-dep-nmod-tmod.html">nmod:tmod</a></tt>.

66 nodes (0%) are attached to their parents as `nmod:lmod`.

65 instances of `nmod:lmod` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.34848484848485.

The following 7 pairs of parts of speech are connected with `nmod:lmod`: <tt><a href="gsw_divital-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gsw_divital-pos-PROPN.html">PROPN</a></tt> (38; 58% instances), <tt><a href="gsw_divital-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gsw_divital-pos-NOUN.html">NOUN</a></tt> (18; 27% instances), <tt><a href="gsw_divital-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gsw_divital-pos-PROPN.html">PROPN</a></tt> (3; 5% instances), <tt><a href="gsw_divital-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gsw_divital-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="gsw_divital-pos-ADV.html">ADV</a></tt>-<tt><a href="gsw_divital-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="gsw_divital-pos-SYM.html">SYM</a></tt>-<tt><a href="gsw_divital-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="gsw_divital-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="gsw_divital-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nmod:lmod	color:blue
1	Darmstadt	_	PROPN	_	_	4	nmod:lmod	_	Lemma[de]=Darmstadt|SpaceAfter=No|Gloss[fr]=Darmstadt
2	,	_	PUNCT	_	_	4	punct	_	Lemma[de]=,|Gloss[fr]=,
3	Hessisches	_	ADJ	_	_	4	amod	_	Lemma[de]=Hessisches|Gloss[fr]=hessois
4	Landesmuseum	_	NOUN	_	_	0	root	_	Lemma[de]=Landesmuseum|Gloss[fr]=musée régional

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 nmod:lmod	color:blue
1	D	_	DET	_	_	2	det	_	Gloss[fr]=la|Lemma[de]=die
2	Moselle	_	PROPN	_	Foreign=Yes	7	nsubj	_	Gloss[fr]=Moselle|Lang=fr
3	ésch	_	AUX	_	_	7	cop	_	Gloss[fr]=est|Lemma[de]=sein
4	awwer	_	CCONJ	_	_	7	cc	_	Gloss[fr]=cependant|Lemma[de]=aber
5	numme	_	ADV	_	_	7	advmod	_	Gloss[fr]=que|Lemma[de]=nur
6	s	_	DET	_	_	7	det	_	Gloss[fr]=le|Lemma[de]=das
7	nördlichi	_	ADJ	_	_	0	root	_	Gloss[fr]=nord/septentrional|Lemma[de]=nördlich
8	vun	_	ADP	_	_	11	case	_	Gloss[fr]=de|Lemma[de]=von
9	de	_	DET	_	_	11	det	_	Gloss[fr]=les|Lemma[de]=das
10	vier	_	NUM	_	_	11	nummod	_	Gloss[fr]=quatre|Lemma[de]=vier
11	Departement	_	NOUN	_	_	7	nmod:lmod	_	Gloss[fr]=départements|Lemma[de]=Departement
12	én	_	ADP	_	_	14	case	_	Gloss[fr]=dans|Lemma[de]=in
13	de	_	DET	_	_	14	det	_	Gloss[fr]=la|Lemma[de]=die
14	Region	_	NOUN	_	_	11	nmod:lmod	_	Gloss[fr]=région|Lemma[de]=Region
15	Lorraine	_	PROPN	_	Foreign=Yes	14	flat	_	Gloss[fr]=Lorraine|Lang=fr|SpaceAfter=No
16	.	_	PUNCT	_	_	7	punct	_	Gloss[fr]=.|Lemma[de]=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 nmod:lmod	color:blue
1	Mr	_	PRON	_	_	2	nsubj	_	Gloss[fr]=on|Lemma[de]=man
2	weiss	_	VERB	_	_	0	root	_	Gloss[fr]=sait|Lemma[de]=wissen
3	au	_	ADV	_	_	2	advmod	_	Gloss[fr]=aussi|Lemma[de]=auch|SpaceAfter=No
4	,	_	PUNCT	_	_	16	punct	_	Gloss[fr]=,|Lemma[de]=,
5	àss	_	SCONJ	_	_	16	mark	_	Gloss[fr]=que|Lemma[de]=dass
6	Vieux-Boucau	_	PROPN	_	Foreign=Yes	16	nsubj	_	Gloss[fr]=Vieux-Boucau|Lang=fr
7	in	_	ADP	_	_	9	case	_	Gloss[fr]=dans|Lemma[de]=in
8	de	_	DET	_	_	9	det	_	Gloss[fr]=les|Lemma[de]=die
9	Landes	_	PROPN	_	Foreign=Yes	6	nmod:lmod	_	Gloss[fr]=Landes|Lang=fr
10	d'	_	DET	_	_	12	det	_	Gloss[fr]=l'|Lemma[de]=die|SpaceAfter=No
11	ehmàlig	_	ADJ	_	_	12	amod	_	Gloss[fr]=ancienne|Lemma[de]=ehmalig
12	Mindùng	_	NOUN	_	_	16	obj	_	Gloss[fr]=embouchure|Lemma[de]=Mündung
13	vù	_	ADP	_	_	15	case	_	Gloss[fr]=de|Lemma[de]=von
14	m	_	DET	_	_	15	det	_	Gloss[fr]=l'|Lemma[de]=der
15	Adour	_	PROPN	_	Foreign=Yes	12	nmod:poss	_	Gloss[fr]=Adour|Lang=fr
16	bezeichnet	_	VERB	_	_	2	ccomp	_	Gloss[fr]=désigne|Lemma[de]=bezeichnen
17	(	_	PUNCT	_	_	18	punct	_	Gloss[fr]=(|Lemma[de]=(|SpaceAfter=No
18	boca	_	NOUN	_	Foreign=Yes	16	parataxis	_	Gloss[fr]=bouche|Lang=oci|SpaceAfter=No
19	:	_	PUNCT	_	_	21	punct	_	Gloss[fr]=:|Lemma[de]=:
20	"	_	PUNCT	_	_	21	punct	_	Gloss[fr]="|Lemma[de]="|SpaceAfter=No
21	Mül	_	NOUN	_	_	18	obj	_	Gloss[fr]=bouche|Lemma[de]=Maul/Mund|SpaceAfter=No
22	"	_	PUNCT	_	_	21	punct	_	Gloss[fr]="|Lemma[de]="|SpaceAfter=No
23	;	_	PUNCT	_	_	21	punct	_	Gloss[fr]=;|Lemma[de]=;
24	bocau	_	NOUN	_	Foreign=Yes	18	conj	_	Gloss[fr]=embouchure|Lang=oci
25	:	_	PUNCT	_	_	27	punct	_	Gloss[fr]=:|Lemma[de]=:
26	"	_	PUNCT	_	_	27	punct	_	Gloss[fr]="|Lemma[de]="|SpaceAfter=No
27	Mindung	_	NOUN	_	_	24	obj	_	Gloss[fr]=embouchure|Lemma[de]=Mündung|SpaceAfter=No
28	"	_	PUNCT	_	_	27	punct	_	Gloss[fr]="|Lemma[de]="
29	uf	_	ADP	_	_	30	case	_	Gloss[fr]=en|Lemma[de]=auf
30	Gàskonisch	_	NOUN	_	_	18	nmod	_	Gloss[fr]=gascon|Lemma[de]=Gaskonisch|SpaceAfter=No
31	)	_	PUNCT	_	_	18	punct	_	Gloss[fr]=)|Lemma[de]=)|SpaceAfter=No
32	.	_	PUNCT	_	_	2	punct	_	Gloss[fr]=.|Lemma[de]=.

~~~


