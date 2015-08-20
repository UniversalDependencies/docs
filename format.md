---
layout: base
title:  'Format'
---

# CoNLL-U Format

We use a revised version of [the CoNLL-X format](http://ilk.uvt.nl/conll/#dataformat) called CoNLL-U. 
Annotations are encoded in plain text files (UTF-8) with three types of lines:

 1. Word lines containing the annotation of a word/token in 10 fields separated by single tab characters; see below.
 2. Blank lines marking sentence boundaries.
 3. Comment lines starting with hash (#).

Sentences consist of one or more word lines, and word lines contain the following fields:

 1. ID: Word index, integer starting at 1 for each new sentence; may be a range for tokens with multiple words.
 2. FORM: Word form or punctuation symbol.
 3. LEMMA: Lemma or stem of word form.
 4. CPOSTAG: [Universal part-of-speech tag](u/pos/index.html) drawn from our revised version of the Google universal POS tags.
 5. POSTAG: Language-specific part-of-speech tag; underscore if not available.
 6. FEATS: List of morphological features from the [universal feature inventory](u/feat/index.html) or from a defined [language-specific extension](ext-feat-index.html); underscore if not available.
 7. HEAD: Head of the current token, which is either a value of ID or zero (0).
 8. DEPREL: [Universal Stanford dependency relation](u/dep/index.html) to the HEAD (root iff HEAD = 0) or a defined language-specific subtype of one.
 9. DEPS: List of secondary dependencies (head-deprel pairs).
10. MISC: Any other annotation.

The fields DEPS and MISC replace the obsolete fields PHEAD and PDEPREL of the CoNLL-X format. 
In addition, we have modified the usage of the ID, FORM, LEMMA, POSTAG, FEATS and HEAD fields as explained below.

The fields must additionally meet the following constraints:

* Fields must not be empty.
* Fields must not contain space characters.

# Words and Tokens

To accommodate the representation of both words and (multiword) tokens (see [Tokenization](u/overview/tokenization.html)), 
we adopt an extension of the original CoNLL-X token indexing scheme, where words are indexed with integers 1, 2, 3, ..., 
while (multiword) tokens are indexed with integer ranges like 1-2 or 3-5. 
Lines representing such tokens are inserted before the first word in the range.
These ranges must be nonempty and must not overlap.
They have a FORM value – the string that occurs in the sentence – but have an underscore in all the remaining fields
(because the token represents multiple words, each with its own lemma, part-of-speech tag, syntactic head, and so on). 
This is illustrated in the following annotation snippet,
showing only the first three fields for the Spanish sentence _vámonos al mar_ (let's go to the sea):

    1-2    vámonos   _
    1      vamos     ir
    2      nos       nosotros
    3-4    al        _
    3      a         a
    4      el        el
    5      mar       mar		

We extract the word sequence by skipping all range IDs:

    1      vamos     ir
    2      nos       nosotros
    3      a         a
    4      el        el
    5      mar       mar		

We extract the raw token sequence by skipping all integer IDs that are included in a preceding range ID:

    1-2    vámonos   _
    3-4    al        _
    5      mar       mar		

To facilitate the use of CoNLL-U treebanks, we provide a script that extracts either the annotated _word_ sequence (with
the original integer IDs) or the raw _token_ sequence with a heuristic mapping of morphological and syntactic annotation and plain integer indexing (like [the traditional CoNLL-X format](http://ilk.uvt.nl/conll/#dataformat)). Moreover, to 
facilitate parser evaluation for languages with nondeterministic word segmentation, we also provide a mapping to a format
where tokens are indexed with integers and words (if needed) with decimals. We refer to this scheme as _token indexing,_
in contrast to the _word indexing_ scheme used as the offical treebank representation. Our running example looks as follows with token indexing:

    1      vámonos   _
    1.1    vamos     ir
    1.2    nos       nosotros
    2      al        _
    2.1    a         a
    2.2    el        el
    3      mar       mar		


# Morphological Annotation

The CPOSTAG field contains a part-of-speech tag from the [universal POS tag](u/pos/index.html) set, while the POSTAG optionally contains a language-specific part-of-speech tag, normally from a traditional, more fine-grained tagset. If the POSTAG field is used, the treebank-specific documentation should define a mapping from POSTAG to CPOSTAG values (which may be context-sensitive 
and refer to other fields as well). If no language-specific tags are available, the POSTAG field should contain an underscore for all words.

The FEATS field contains a list
of morphological features, with vertical bar (\|) as list separator and with underscore to represent the empty list.
All features should be represented as attribute-value pairs, with an equals sign (=) separating the attribute from the value. In addition, features should as far as possible be selected from the [universal feature inventory](u/feat/index.html) and be sorted alphabetically by attribute names. It is possible to declare that a feature has two or more values for a given word: `Case=Acc,Dat`. In this case, the values are sorted alphabetically. In sorting, uppercase letters are considered identical to their lowercase counterparts. Feature names must have the form `[A-Z0-9][A-Z0-9a-z]*(\[[a-z0-9]+\])?` and feature values must have the form `[A-Z0-9][a-zA-Z0-9]*`.

Here is an example, showing only the first five fields for the 
Swedish sentence _Då var han elva år_ (Then he was eleven years old):

    1    Då      då     ADV      AB                    _
    2    var     vara   VERB     VB.PRET.ACT           Tense=Past|Voice=Act
    3    han     han    PRON     PN.UTR.SIN.DEF.NOM    Case=Nom|Definite=Def|Gender=Com|Number=Sing
    4    elva    elva   NUM      RG.NOM                Case=Nom|NumType=Card
    5    år      år     NOUN     NN.NEU.PLU.IND.NOM    Case=Nom|Definite=Ind|Gender=Neut|Number=Plur
    6    .       .      PUNCT    DL.MAD                _

Morphological annotation is only provided for words. 
Tokens that are not words have an underscore in the CPOSTAG, POSTAG and FEATS fields. 

# Syntactic Annotation

The HEAD and DEPREL fields are used to encode a dependency tree over words. The DEPREL value should be a [universal Stanford dependency relation](u/dep/index.html) or a language-specific subtype of such a relation (defined in the language-specific documentation). 
As in the case of morphology, syntactic annotation is only provided for words.
Tokens that are not words have an underscore in both the HEAD and DEPREL fields. However, the script that extracts the token sequence optionally provides a heuristic mapping of the morphological and syntactic annotation to non-word tokens. For example, given the following annotation of the English sentence _I haven't a clue_:

    1     I         I      PRON    PRN   Case=Nom|Number=Sing|Person=1     2   nsubj
    2-3   haven't   _      _       _     _                                 _   _
    2     have      have   VERB    VB    Number=Sing|Person=1|Tense=Pres   0   root
    3     not       not    PART    RB    Negative=Neg                      2   neg
    4     a         a      DET     DT    Definite=Ind|PronType=Art         5   det
    5     clue      clue   NOUN    NN    Number=Sing                       2   dobj
    6     .         .      PUNCT   .     _                                 2   punct
 
We can extract the following approximation at the token level (with token indexing):

    1     I         I      PRON    PRN   Case=Nom|Number=Sing|Person=1                  2   nsubj
    2     haven't   _      VERB    _     Negative=Neg|Number=Sing|Person=1|Tense=Pres   0   root
    3     a         a      DET     DT    Definite=Ind|PronType=Art                      4   det
    4     clue      clue   NOUN    NN    Number=Sing                                    2   dobj
    5     .         .      PUNCT   .     _                                              2   punct

The usefulness of this approximate representation will vary from language to language, depending on the divergence between tokens and words and on the arbitrariness of the heuristic mapping.
 
The HEAD and DEPREL values define the basic dependencies which must be strictly a tree. However, in addition to these basic dependencies, enhanced representations may require additional dependency relations, for example, when dependencies propagate over coordinate structures. Such dependencies can be specified in the DEPS field, using a list of head-relation pairs. We use colon (:) to separate the head and relation and (as usual) vertical bar (\|) to separate list items and underscore for the empty list. The list is to be sorted by the index of the head: `4:nsubj|11:nsubj`.

Here is an example, showing the first nine fields for the English sentence _They buy and sell books_:

    1    They     they    PRON    PRN    Case=Nom|Number=Plur               2    nsubj    4:nsubj
    2    buy      buy     VERB    VBP    Number=Plur|Person=3|Tense=Pres    0    root     _
    3    and      and     CONJ    CC     _                                  2    cc       _
    4    sell     sell    VERB    VBP    Number=Plur|Person=3|Tense=Pres    2    conj     0:root
    5    books    book    NOUN    NNS    Number=Plur                        2    dobj     4:dobj
    6    .        .       PUNCT   .      _                                  2    punct    _

The dependency relations in both DEPREL and DEPS must have the form `[a-z][a-z_-]*(:[a-z][a-z_-]*)?`,
and use of the dash (`-`) character instead of underscore (`_`) is encouraged.

# Miscellaneous

The final MISC field is for storing any additional information that does not fit into any of the other fields, such as language-specific annotation, any information about other linguistic levels such as discourse,
or projective heads and dependency relations (cf. the old PHEAD and PDEPREL fields of 
the CoNLL-X format). The exact format used in this field should be specified in the
treebank-specific documentation, but it is recommended to use a list of attribute-value pairs as in the FEATS field. 
If the MISC field is not used, it should contain an underscore.

## Untokenized text

To facilitate reconstruction of original (pre-tokenization) text, the information on original word segmentation should be kept if available. Every token after which there was no space in the original text should contain `SpaceAfter=No` in its MISC field. Note that this feature applies to the token level, not to the word level. Syntactic words that are just part of surface tokens will be ignored during detokenization and thus do not need the feature. In the example below, the line indexed 1 does not contain the `SpaceAfter` feature even though there was no space between _He_ and _'s_ in the underlying sentence. However, if there was no space between _He's_ and the third token, the 1-2 line would have `SpaceAfter=No`.

    1-2   He's      _         _       _       _                                 _   _       _   _
    1     He        he        PRON    PRN     Case=Nom|Number=Sing|Person=3     2   nsubj   _   _
    2     is        be        VERB    VBZ     Number=Sing|Person=3|Tense=Pres   0   root    _   _
    3     in        in        ADP     IN      _                                 6   case    _   _
    4     the       the       DET     DT      Definite=Def|PronType=Art         6   det     _   _
    5     United    unite     VERB    VBD     Tense=Past|VerbForm=Part          6   amod    _   _
    6     Kingdom   kingdom   NOUN    NN      Number=Sing                       2   nmod    _   _
    7     (         (         PUNCT   -LRB-   _                                 8   punct   _   SpaceAfter=No
    8     UK        UK        PROPN   NNP     Number=Sing                       6   appos   _   SpaceAfter=No
    9     )         )         PUNCT   -RRB-   _                                 8   punct   _   SpaceAfter=No
    10    .         .         PUNCT   .       _                                 2   punct   _   _

# Sentence Boundaries and Comments

There must be exactly one blank line _after_ every sentence, including the last sentence in the file.
Empty sentences are not allowed.

Lines starting with the `#` character and preceding a sentence are considered as carrying metadata relevant to the following sentence. These lines are an integral part of the format as they give the ability to embed metadata together with the sentences. Consequently, any tools compatible with the CoNLL-U format should carry these lines over into their output (unless specifically designed to process them in some way). The contents of the comments and metadata is left unrestricted and will vary depending on the application. Comment and metadata lines inside sentences (i.e., between the token lines) are disallowed.

    # sent_id 1
    # ...
    1    They     they    PRON    PRN    Case=Nom|Number=Plur              2   nsubj   4:nsubj   _
    2    buy      buy     VERB    VB     Number=Plur|Person=3|Tense=Pres   0   root    _         _
    3    and      and     CONJ    CC     _                                 2   cc      _         _
    4    sell     sell    VERB    VB     Number=Plur|Person=3|Tense=Pres   2   conj    0:root    _
    5    books    book    NOUN    NNS    Number=Plur                       2   dobj    4:dobj    SpaceAfter=No
    6    .        .       PUNCT   .      _                                 2   punct   _         _
    
    # sent_id 2
    # ...
    1     I         I      PRON    PRN   Case=Nom|Number=Sing|Person=1     2   nsubj   _   _
    2-3   haven't   _      _       _     _                                 _   _       _   _
    2     have      have   VERB    VB    Number=Sing|Person=1|Tense=Pres   0   root    _   _
    3     not       not    PART    RB    Negative=Neg                      2   neg     _   _
    4     a         a      DET     DT    Definite=Ind|PronType=Art         4   det     _   _
    5     clue      clue   NOUN    NN    Number=Sing                       2   dobj    _   SpaceAfter=No
    6     .         .      PUNCT   .     _                                 2   punct   _   _
