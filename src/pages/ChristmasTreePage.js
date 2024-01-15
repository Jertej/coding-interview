import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { drawChristmasTree } from '../utils';
import parse from 'html-react-parser'
import { Link } from 'react-router-dom';

export default function ChristmasTreePage() {
    let [tree, createTree] = useState('<h4>Please enter more than 2 rows</h4>');
    let [isTreeCompleted, completeDraw] = useState(false);

    const handleCreateTree = (e) => {
        e.preventDefault();
        const treeHeight = parseInt(tree);

        if (treeHeight > 2) {
            createTree(tree = drawChristmasTree(treeHeight));
            completeDraw(isTreeCompleted = true);
        } else {
            completeDraw(isTreeCompleted = false);
        }
    }

    return (
        <Box>
            <h1>Christmas Tree Task</h1>
            <form>
                <span>{parse(tree)}</span>
                {isTreeCompleted ? <span>|</span>: false}
                <div>
                    <br/>
                    <input type="number" onChange={(e) => createTree(tree = e.target.value)}/>
                    <button onClick={(e) => handleCreateTree(e)}>
                        Create Christmas Tree
                    </button>

                </div>
            </form>
            <br/>
            <Link to="brackets">Go to the Brackets task</Link>
        </Box>
    );
}
