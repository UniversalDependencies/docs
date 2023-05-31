---
layout: base
title:  'Statistics of nmod:poss in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="sv_pud-dep-nmod.html">nmod</a></tt>.

461 nodes (2%) are attached to their parents as `nmod:poss`.

460 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3644251626898.

The following 9 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (249; 54% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (110; 24% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (88; 19% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 nmod:poss	color:blue
1	Hon	hon	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj:pass	2:nsubj:pass	_
2	åtalas	åtala	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
3	även	även	ADV	AB	_	2	advmod	2:advmod	_
4	för	för	ADP	PP	_	7	mark	7:mark	_
5	att	att	PART	IE	_	7	mark	7:mark	_
6	ha	ha	AUX	VB|INF|AKT	VerbForm=Inf|Voice=Act	7	aux	7:aux	_
7	försökt	försöka	VERB	VB|SUP|AKT	VerbForm=Sup|Voice=Act	2	advcl	2:advcl:att	_
8	mörda	mörda	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	7	xcomp	7:xcomp	_
9	sin	sin	PRON	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes	11	nmod:poss	11:nmod:poss	_
10	tvååriga	tvåårig	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	11	amod	11:amod	_
11	dotter	dotter	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	obj	8:obj	SpaceAfter=No
12	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Miljövårdare	miljövårdare	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nsubj	2:nsubj	_
2	välkomnar	välkomna	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	kommissionens	kommission	NOUN	NN|UTR|SIN|DEF|GEN	Case=Gen|Definite=Def|Gender=Com|Number=Sing	4	nmod:poss	4:nmod:poss	_
4	tillkännagivande	tillkännagivande	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	obj	2:obj	SpaceAfter=No
5	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nmod:poss	color:blue
1	De	den	DET	DT|NEU|PLU|DEF	Definite=Def|Gender=Neut|Number=Plur	3	det	3:det	_
2	nya	ny	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	3	amod	3:amod	_
3	utgifterna	utgift	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	4	nsubj:pass	4:nsubj:pass	_
4	finansieras	finansiera	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
5	av	av	ADP	PP	_	8	case	8:case	_
6	Clintons	Clinton	PROPN	PM|GEN	Case=Gen	8	nmod:poss	8:nmod:poss	_
7	stora	stor	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	8	amod	8:amod	_
8	bankkonto	bankkonto	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	4	obl:agent	4:obl:agent	SpaceAfter=No
9	.	.	PUNCT	MAD	_	4	punct	4:punct	_

~~~


