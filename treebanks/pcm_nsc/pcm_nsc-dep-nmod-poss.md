---
layout: base
title:  'Statistics of nmod:poss in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="pcm_nsc-dep-nmod-appos.html">nmod:appos</a></tt>, <tt><a href="pcm_nsc-dep-nmod-emph.html">nmod:emph</a></tt>, <tt><a href="pcm_nsc-dep-nmod-periph.html">nmod:periph</a></tt>.

1890 nodes (1%) are attached to their parents as `nmod:poss`.

1890 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25502645502645.

The following 10 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1859; 98% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nmod:poss	color:blue
1	#	#	X	_	_	14	dep	_	AlignBegin=58309|AlignEnd=58814|Gloss=PUNCT
2	den	dem	ADV	_	_	14	advmod:periph	_	AlignBegin=58814|AlignEnd=58970|Gloss=den
3	<	<	X	_	_	2	dep	_	AlignBegin=58970|AlignEnd=59000|Gloss=PUNCT
4	ending	ending	NOUN	_	_	14	obl:mod	_	AlignBegin=59000|AlignEnd=59369|Gloss=end
5	of	of	ADP	_	_	7	case	_	AlignBegin=59369|AlignEnd=59585|Gloss=of
6	di	di	DET	_	Definite=Def|PronType=Art	7	det	_	AlignBegin=59585|AlignEnd=59679|Gloss=DEF.ART
7	year	year	NOUN	_	_	4	nmod	_	AlignBegin=59679|AlignEnd=59956|Gloss=year
8	<	<	X	_	_	4	dep	_	AlignBegin=59956|AlignEnd=59986|Gloss=PUNCT
9	#	#	X	_	_	4	dep	_	AlignBegin=59986|AlignEnd=60261|Gloss=PUNCT
10	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	14	nsubj	_	AlignBegin=60261|AlignEnd=60331|Gloss=NOM.PL.3
11	go	go	AUX	_	Aspect=Prosp	14	aux	_	AlignBegin=60331|AlignEnd=60391|Gloss=PROSP
12	con	con	AUX	_	Aspect=Cons	14	aux	_	AlignBegin=60391|AlignEnd=60601|Gloss=CONS
13	dey	dey	AUX	_	Aspect=Imp	14	aux	_	AlignBegin=60601|AlignEnd=60771|Gloss=IPFV
14	pay	pay	VERB	_	_	0	root	_	AlignBegin=60771|AlignEnd=60970|Gloss=pay
15	us	us	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	14	obj	_	AlignBegin=60970|AlignEnd=61240|Gloss=ACC.PL.1
16	#	#	X	_	_	18	dep	_	AlignBegin=61240|AlignEnd=61442|Gloss=PUNCT
17	our	our	PRON	_	Number=Plur|Person=1|Poss=Yes	18	nmod:poss	_	AlignBegin=61442|AlignEnd=61671|Gloss=PL.1.POSS
18	money	money	NOUN	_	_	14	obj	_	AlignBegin=61671|AlignEnd=61941|Gloss=money
19	//	//	X	_	_	14	dep	_	AlignBegin=61941|AlignEnd=61971|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	but	but	CCONJ	_	_	5	discourse	_	AlignBegin=145280|AlignEnd=145478|Gloss=but
2	no	no	PART	_	Polarity=Neg	5	advmod	_	AlignBegin=145478|AlignEnd=145675|Gloss=NEG
3	be	be	AUX	_	PartType=Cop	5	cop	_	AlignBegin=145675|AlignEnd=145872|Gloss=be1
4	people	people	NOUN	_	Number=Plur	5	nmod:poss	_	AlignBegin=145872|AlignEnd=146070|Gloss=people.PL
5	fault	fault	NOUN	_	_	0	root	_	AlignBegin=146070|AlignEnd=146268|Gloss=fault
6	like	like	ADP	_	_	7	case	_	AlignBegin=146268|AlignEnd=146465|Gloss=like
7	dat	dat	PRON	_	Number=Sing|PronType=Dem	5	obl:mod	_	AlignBegin=146465|AlignEnd=146662|Gloss=SG.DEM
8	now	now	ADV	_	_	7	advmod:emph	_	AlignBegin=146662|AlignEnd=146860|Gloss=now
9	//	//	X	_	_	5	dep	_	AlignBegin=146860|AlignEnd=146860|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nmod:poss	color:blue
1	me	me	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	dislocated	_	AlignBegin=301426|AlignEnd=301591|Gloss=me
2	too	too	ADV	_	_	1	advmod:emph	_	AlignBegin=301591|AlignEnd=301756|Gloss=too
3	<	<	X	_	_	1	dep	_	AlignBegin=301756|AlignEnd=301756|Gloss=PUNCT
4	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	AlignBegin=301756|AlignEnd=301921|Gloss=NOM.SG.1
5	go	go	AUX	_	Aspect=Prosp	6	aux	_	AlignBegin=301921|AlignEnd=302086|Gloss=PROSP
6	invite	invite	VERB	_	_	0	root	_	AlignBegin=302086|AlignEnd=302251|Gloss=invite
7	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	6	obj	_	AlignBegin=302251|AlignEnd=302416|Gloss=NOM.2
8	for	for	ADP	_	_	10	case	_	AlignBegin=302416|AlignEnd=302581|Gloss=for
9	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	10	nmod:poss	_	AlignBegin=302581|AlignEnd=302746|Gloss=SG.1.POSS
10	own	own	ADJ	_	_	6	obl:arg	_	AlignBegin=302746|AlignEnd=302911|Gloss=own
11	o	o	PART	_	PartType=Disc	10	advmod:emph	_	AlignBegin=302911|AlignEnd=303076|Gloss=EMPH
12	!//	!//	X	_	_	6	dep	_	AlignBegin=303076|AlignEnd=303076|Gloss=PUNCT

~~~


