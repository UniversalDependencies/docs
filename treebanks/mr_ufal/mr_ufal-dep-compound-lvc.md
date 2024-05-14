---
layout: base
title:  'Statistics of compound:lvc in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="mr_ufal-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="mr_ufal-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="mr_ufal-dep-compound-svc.html">compound:svc</a></tt>.

43 nodes (1%) are attached to their parents as `compound:lvc`.

43 instances of `compound:lvc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06976744186047.

The following 4 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (28; 65% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (9; 21% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (5; 12% instances), <tt><a href="mr_ufal-pos-AUX.html">AUX</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound:lvc	color:blue
1	थापा	थापा	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	2	compound:lvc	_	Translit=thāpā|LTranslit=thāpā
2	मार	मारणे	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=māra|LTranslit=māraṇe
3	!	!	PUNCT	_	_	2	punct	_	Translit=!|LTranslit=!

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:lvc	color:blue
1	तेथे	तेथे	ADV	_	_	6	advmod	_	Translit=tethe|LTranslit=tethe
2	राजा	राजा	NOUN	_	Case=Abs|Gender=Masc|Number=Sing	6	obl	_	Translit=rājā|LTranslit=rājā
3	साठी	साठी	ADP	_	_	2	case	_	Translit=sāṭhī|LTranslit=sāṭhī
4	सिंहासन	सिंहासन	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	6	nsubj:pass	_	Translit=siṁhāsana|LTranslit=siṁhāsana
5	तयार	तयार	ADV	_	_	6	compound:lvc	_	Translit=tayāra|LTranslit=tayāra
6	करण्यात	करणे	VERB	_	Case=Loc|InfForm=Dict|VerbForm=Inf	0	root	_	Translit=karaṇyāta|LTranslit=karaṇe
7	आले	येणे	AUX	_	Aspect=Perf|Gender=Neut|Number=Sing|Person=3|VerbForm=Fin	6	aux:pass	_	Translit=āle|LTranslit=yeṇe
8	होते	असणे	AUX	_	Gender=Neut|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	6	aux	_	SpaceAfter=No|Translit=hote|LTranslit=asaṇe
9	.	.	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound:lvc	color:blue
1	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No|Translit="|LTranslit="
2	हे	हा	DET	_	Deixis=Prox|Gender=Neut|Number=Sing|PronType=Dem	4	det	_	Translit=he|LTranslit=hā
3	म्हातारे	म्हातारा	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	4	amod	_	Translit=mhātāre|LTranslit=mhātārā
4	शेतकरी	शेतकरी	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	Translit=śetakarī|LTranslit=śetakarī
5	साक्षीदार	साक्षीदार	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	Translit=sākṣīdāra|LTranslit=sākṣīdāra
6	का	का	CCONJ	_	_	8	cc	_	Translit=kā|LTranslit=kā
7	खोटे	खोटा	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	8	compound:lvc	_	Translit=khoṭe|LTranslit=khoṭā
8	सांगतात	सांगसांगणे	VERB	_	Aspect=Imp|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	conj	_	SpaceAfter=No|Translit=sāṁgatāta|LTranslit=sāṁgasāṁgaṇe
9	?	?	PUNCT	_	_	8	punct	_	SpaceAfter=No|Translit=?|LTranslit=?
10	"	"	PUNCT	_	_	5	punct	_	Translit="|LTranslit="
11	वकील	वकील	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	12	nsubj	_	Translit=vakīla|LTranslit=vakīla
12	म्हणाला	म्हणणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	5	parataxis	_	SpaceAfter=No|Translit=mhaṇālā|LTranslit=mhaṇaṇe
13	.	.	PUNCT	_	_	12	punct	_	Translit=.|LTranslit=.

~~~


