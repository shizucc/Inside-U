import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = () => {
    // Logika untuk menghapus data
    // Misalnya, panggil fungsi props.onDelete() atau lakukan permintaan HTTP ke endpoint hapus data
    // Setelah menghapus data, Anda dapat menutup modal dengan handleClose()
    
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Hapus</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Hapus Data
          </Typography>
          <Typography id="modal-modal-description" sx={{ my: 2 }}>
            Apakah anda yakin ingin menghapus data ini?
          </Typography>
          <Button
          variant="contained"
          color="primary"
          onClick={handleDelete}>
            Hapus
          </Button>
          {/* <Link
            method="delete"
            className="font-bold bg-[#98A8F8] text-[#F9F9F9] py-[10px] px-[24px] rounded-[8px] transition ease-in-out duration-300 hover:bg-[#737EDE] hover:drop-shadow-lg" 
            href={route(
            route_for_delete,
            parseInt(
            row.original.id
            )
            )}
            >
                Hapus
            </Link> */}
        </Box>
      </Modal>
    </div>
  );
}