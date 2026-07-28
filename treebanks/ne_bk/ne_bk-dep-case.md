---
layout: base
title:  'Statistics of case in UD_Nepali-BK'
udver: '2'
---

## Treebank Statistics: UD_Nepali-BK: Relations: `case`

This relation is universal.

4 nodes (0%) are attached to their parents as `case`.

4 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `case`: <tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ne_bk-pos-ADP.html">ADP</a></tt> (2; 50% instances), <tt><a href="ne_bk-pos-PRON.html">PRON</a></tt>-<tt><a href="ne_bk-pos-ADP.html">ADP</a></tt> (2; 50% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case	color:blue
1	अनि	अनि	CCONJ	_	_	6	cc	_	_
2	गाईको	गाई	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	3	nmod:poss	_	_
3	दूध	दूध	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	6	obl	_	_
4	ले	ले	ADP	_	_	3	case	_	_
5	महीसही	महीसही	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	6	obj	_	_
6	पार्ने	पार्नु	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Part	0	root	_	_
7	।	।	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	आफु	आफु	PRON	_	Number=Sing|Person=3|PronType=Prs	6	iobj	_	_
2	लाई	लाई	ADP	_	_	1	case	_	_
3	थकाई	थकाई	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	4	nsubj	_	_
4	लागेर	लाग्नु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Conv	6	advcl	_	_
5	सुत्न	सुत्नु	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Inf	6	xcomp	_	_
6	लागी	लाग्नु	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Part	0	root	_	_
7	रहेछ	रहेछ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	xcomp	_	_
8	।	।	PUNCT	_	_	6	punct	_	_

~~~


