import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { editingResponse } from '../../store/response';

function EditResponse() {
    const dispatch = useDispatch();
    const history = useHistory();
    const updateThisResponse = useSelector(state => state.response.oneStory)
}
