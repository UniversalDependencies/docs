---
layout: base
title:  'Guidelines for Language-Specific Documentation'
---

# Guidelines for language-specific documentation

See also <a href="contributing.html">How to contribute</a>, especially the section <a href="contributing.html#style-guidelines">Style guidelines</a>.

The language-specific documentation is organized by sections.
<a href="http://universaldependencies.github.io/docs/#language-sv">Swedish</a> may serve as an example conforming to these guidelines.

## overview/introduction.html

Short description of the treebank, size, types of texts, annotation/conversion process, etc.

Optional subheadings: "Acknowledgments", "References"

## overview/tokenization.html

Short description of the principles for word segmentation with references to additional documentation and/or standard tokenizers as appropriate.
The description must state whether the treebank contains multiword tokens and, if so, describe the major cases in a separate subsection
(see the <a href="http://universaldependencies.github.io/docs/cs/overview/tokenization.html">Czech documentation</a> for an example of this).
It is also desirable to describe the heuristics how annotations of syntactic words should
be recombined if a user chooses to work with surface tokens only.

Optional subheadings: "Multiword tokens", "References"

## overview/morphology.html

Short description of the use of universal tags and features making clear whether language-specific features have been added (but without describing them).
Short description of language-specific tags if relevant.

Optional subheading: "References"

## pos/index.html

List of universal tags with unused tags crossed out (see <a href="http://universaldependencies.github.io/docs/fi/pos/index.html">Finnish</a> for an example).
Each tag is linked to a subpage with a language-specific definition and examples.
Minimally, this should be a restatement of the universal definition with at least one language-specific example added.
Preferably, it should add more information, for example, about inflectional categories of a part of speech in the specific language (see <a href="http://universaldependencies.github.io/docs/sv/pos/ADJ.html">Swedish ADJ</a> documentation for an example).

## feat/index.html

List of morphological features with unused universal features crossed out and language-specific features preceded by a + (see <a href="http://universaldependencies.github.io/docs/fi/feat/index.html">Finnish</a> for an example).
Each feature is linked to a subpage with a language-specific definition and examples.
Minimally, this should be a restatement of the universal definition with at least one language-specific example added.
It should also make clear which values are used for a given feature, since this may vary across languages (see <a href="http://universaldependencies.github.io/docs/sv/feat/Case.html">Swedish Case</a> documentation for an example).

## overview/syntax.html

Short description of the use of universal dependency relations making clear whether language-specific subtypes have been added (but without describing them).

## overview/specific-syntax.html

Optional description of specific constructions (see <a href="http://universaldependencies.github.io/docs/fi/overview/specific-syntax.html">Finnish</a> for examples).
Ideally, this should be structured in the same way as the universal documentation, but since the latter is not very developed it seems hard to enforce this.
If possible, use the main headings "Elements of a clause", "Elements of a nominal", "Adjectival and adverbial constructions",
and add additional headings as needed (for example, "Coordination", "Compounding", etc.)
Use any subheadings that are appropriate.

## dep/index.html

List of universal dependencies with unused relations crossed out and language-specific subtypes indented below their supertype (see <a href="http://universaldependencies.github.io/docs/fi/dep/index.html">Finnish</a> for an example).
Each relation is linked to a subpage with a language-specific definition and examples.
Minimally, this should be a restatement of the universal definition with at least one language-specific example added. 

## Global list of language-specific features and relations

The owners of each language should also make sure that their language-specific features and relations are added to:

* <a href="http://universaldependencies.github.io/docs/ext-feat-index.html">http://universaldependencies.github.io/docs/ext-feat-index.html</a>
* <a href="http://universaldependencies.github.io/docs/ext-dep-index.html">http://universaldependencies.github.io/docs/ext-dep-index.html</a>

<!--Ideally, this should happen automagically given the language-specific documentation to ensure consistency.-->

## Discrepancies between the guidelines and the released data

Known discrepancies from the guidelines should be mentioned under the most relevant heading.

There should be a diffs section at the bottom as a hash-hash section, which would then be followed by a hash-hash-hash section for each individual treebank. E.g.:

    ## Diffs
    
    ### English Web Treebank
    
    At present what is tagged PNOUN reflects the Penn Treebank annotation guidelines rather than
    UD discussion and conventions.

