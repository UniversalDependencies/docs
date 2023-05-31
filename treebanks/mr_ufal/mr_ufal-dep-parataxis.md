---
layout: base
title:  'Statistics of parataxis in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `parataxis`

This relation is universal.

76 nodes (2%) are attached to their parents as `parataxis`.

76 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.01315789473684.

The following 11 pairs of parts of speech are connected with `parataxis`: <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (55; 72% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (7; 9% instances), <tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 parataxis	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No|Translit="|LTranslit="
2	काय	काय	PRON	_	Case=Acc|PronType=Int	3	obj	_	Translit=kāya|LTranslit=kāya
3	लागला	लागणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	0	root	_	Translit=lāgalā|LTranslit=lāgaṇe
4	निकाल	निकाल	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	Translit=nikāla|LTranslit=nikāla
5	?	?	PUNCT	_	_	3	punct	_	SpaceAfter=No|Translit=?|LTranslit=?
6	"	"	PUNCT	_	_	3	punct	_	Translit="|LTranslit="
7	बायकोने	बायको	NOUN	_	Case=Erg|Gender=Fem|Number=Sing	8	nsubj	_	Translit=bāyakone|LTranslit=bāyako
8	विचारले	विचारणे	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Person=3|VerbForm=Fin	3	parataxis	_	SpaceAfter=No|Translit=vicārale|LTranslit=vicāraṇe
9	.	.	PUNCT	_	_	8	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 parataxis	color:blue
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


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 parataxis	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No|Translit="|LTranslit="
2	कोण	कोण	PRON	_	Case=Nom|PronType=Int	3	nsubj	_	Translit=koṇa|LTranslit=koṇa
3	मेले	मेला	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No|Translit=mele|LTranslit=melā
4	?	?	PUNCT	_	_	3	punct	_	SpaceAfter=No|Translit=?|LTranslit=?
5	"	"	PUNCT	_	_	3	punct	_	Translit="|LTranslit="
6	म्हाताऱ्या	म्हातारा	ADJ	_	Case=Abs	7	amod	_	Translit=mhātāryā|LTranslit=mhātārā
7	गुरवाने	गुरव	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	8	nsubj	_	Translit=guravāne|LTranslit=gurava
8	विचारले	विचारणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Plur|Person=3|VerbForm=Fin	3	parataxis	_	SpaceAfter=No|Translit=vicārale|LTranslit=vicāraṇe
9	.	.	PUNCT	_	_	8	punct	_	Translit=.|LTranslit=.

~~~


