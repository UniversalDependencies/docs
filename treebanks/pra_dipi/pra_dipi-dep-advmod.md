---
layout: base
title:  'Statistics of advmod in UD_Prakrit-DIPI'
udver: '2'
---

## Treebank Statistics: UD_Prakrit-DIPI: Relations: `advmod`

This relation is universal.
There are 4 language-specific subtypes of `advmod`: <tt><a href="pra_dipi-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="pra_dipi-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="pra_dipi-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="pra_dipi-dep-advmod-tmod.html">advmod:tmod</a></tt>.

38 nodes (4%) are attached to their parents as `advmod`.

36 instances of `advmod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.55263157894737.

The following 7 pairs of parts of speech are connected with `advmod`: <tt><a href="pra_dipi-pos-VERB.html">VERB</a></tt>-<tt><a href="pra_dipi-pos-ADV.html">ADV</a></tt> (17; 45% instances), <tt><a href="pra_dipi-pos-VERB.html">VERB</a></tt>-<tt><a href="pra_dipi-pos-PART.html">PART</a></tt> (11; 29% instances), <tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pra_dipi-pos-ADV.html">ADV</a></tt> (4; 11% instances), <tt><a href="pra_dipi-pos-ADV.html">ADV</a></tt>-<tt><a href="pra_dipi-pos-PART.html">PART</a></tt> (3; 8% instances), <tt><a href="pra_dipi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pra_dipi-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="pra_dipi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pra_dipi-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="pra_dipi-pos-VERB.html">VERB</a></tt>-<tt><a href="pra_dipi-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	dhamma	dhamma	NOUN	_	Compound=Yes|Gender=Masc	2	nmod	_	_
2	caraṇe	caraṇa	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	_
3	pi	pi	ADV	_	_	5	discourse	_	_
4	na	na	ADV	_	Polarity=Neg	5	advmod	_	_
5	bhavati	bhava	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Orig=[bha]vati
6	asīlasa	asīla	ADJ	_	Case=Gen|Gender=Neut|Number=Sing	5	obl	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 advmod	color:blue
1	idha	idha	ADV	_	AdvType=Loc	6	advmod:lmod	_	Gloss=here|Orig=[i]dha
2	na	na	PART	_	Polarity=Neg	6	advmod	_	Gloss=not
3	kiṃci	kiṃci	PRON	_	PronType=Ind	4	det	_	Gloss=any
4	jīvaṃ	jīva	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	5	obj	_	Gloss=living-being
5	ārabhitpā	ārabha	VERB	_	VerbForm=Conv	6	advcl	_	Gloss=be-killed-and
6	prajūhitavyaṃ	prajūha	VERB	_	Case=Nom|Gender=Neut|Number=Sing|Tense=Fut|VerbForm=Part|Voice=Pass	0	root	_	Gloss=must-be-sacrificed

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 advmod	color:blue
1	parisā	parisad	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	pi	pi	ADV	_	_	1	discourse	_	_
3	yute	yuta	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	4	obj	_	_
4	āñapayisati	āñā	VERB	_	Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	_
5	gaṇanāyaṃ	gaṇa	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	4	obl	_	_
6	hetuto	hetuto	ADV	_	AdvType=Man	5	advmod	_	_
7	ca	ca	CCONJ	_	_	6	cc	_	_
8	vyaṃjanato	vyaṃjanato	ADV	_	AdvType=Man	6	conj	_	_
9	ca	ca	CCONJ	_	_	8	cc	_	_

~~~


